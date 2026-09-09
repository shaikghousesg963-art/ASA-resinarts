'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import styles from './admin.module.css';
import Navbar from '@/components/Navbar/Navbar';

export default function AdminPage() {
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Dashboard state
  const [products, setProducts] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  
  // New Product Form state
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'resin-art',
    categorylabel: 'RESIN ART',
    price: '',
    originalprice: '',
    description: ''
  });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) fetchProducts();
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) fetchProducts();
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) setError(error.message);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (data) setProducts(data);
    if (error) console.error("Error fetching products:", error);
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      alert("Please select an image");
      return;
    }

    setIsUploading(true);
    
    try {
      // 1. Upload Image
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;
      
      const { error: uploadError } = await supabase.storage
        .from('product_images')
        .upload(filePath, imageFile);

      if (uploadError) throw uploadError;

      // 2. Get Public URL
      const { data: { publicUrl } } = supabase.storage
        .from('product_images')
        .getPublicUrl(filePath);

      // 3. Insert Product
      const { error: insertError } = await supabase
        .from('products')
        .insert([{
          name: newProduct.name,
          category: newProduct.category,
          categorylabel: newProduct.categorylabel,
          price: Number(newProduct.price),
          originalprice: newProduct.originalprice ? Number(newProduct.originalprice) : null,
          image: publicUrl,
          description: newProduct.description
        }]);

      if (insertError) throw insertError;

      alert("Product added successfully!");
      setNewProduct({ name: '', category: 'resin-art', categorylabel: 'RESIN ART', price: '', originalprice: '', description: '' });
      setImageFile(null);
      fetchProducts();
    } catch (err) {
      alert("Error adding product: " + err.message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      await supabase.from('products').delete().eq('id', id);
      fetchProducts();
    }
  };

  if (!session) {
    return (
      <>
        <Navbar />
        <div className={styles.container}>
          <div className={styles.loginContainer}>
            <h1>Admin Login</h1>
            {error && <p className={styles.error}>{error}</p>}
            <form onSubmit={handleLogin}>
              <div className={styles.formGroup}>
                <label>Email</label>
                <input 
                  type="email" 
                  className={styles.input}
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
              <div className={styles.formGroup}>
                <label>Password</label>
                <input 
                  type="password" 
                  className={styles.input}
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{width: '100%'}} disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.dashboardHeader}>
          <h1>Admin Dashboard</h1>
          <button onClick={handleLogout} className="btn btn-outline">Logout</button>
        </div>

        <div className={styles.formCard}>
          <h2>Add New Product (Latest Arrival)</h2>
          <form onSubmit={handleAddProduct}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label>Product Name</label>
                <input type="text" className={styles.input} required 
                  value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} />
              </div>
              <div className={styles.formGroup}>
                <label>Category ID (e.g. resin-art)</label>
                <input type="text" className={styles.input} required 
                  value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})} />
              </div>
              <div className={styles.formGroup}>
                <label>Category Label (e.g. RESIN ART)</label>
                <input type="text" className={styles.input} required 
                  value={newProduct.categorylabel} onChange={e => setNewProduct({...newProduct, categorylabel: e.target.value})} />
              </div>
              <div className={styles.formGroup}>
                <label>Price (₹)</label>
                <input type="number" className={styles.input} required 
                  value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})} />
              </div>
              <div className={styles.formGroup}>
                <label>Original Price (Optional)</label>
                <input type="number" className={styles.input} 
                  value={newProduct.originalprice} onChange={e => setNewProduct({...newProduct, originalprice: e.target.value})} />
              </div>
              <div className={styles.formGroup}>
                <label>Product Image</label>
                <input type="file" className={styles.input} accept="image/*" required 
                  onChange={e => setImageFile(e.target.files[0])} />
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label>Description</label>
              <textarea className={styles.input} rows="3" required
                value={newProduct.description} onChange={e => setNewProduct({...newProduct, description: e.target.value})}></textarea>
            </div>

            <button type="submit" className="btn btn-primary" disabled={isUploading}>
              {isUploading ? 'Uploading & Saving...' : 'Add Product'}
            </button>
          </form>
        </div>

        <div className={styles.formCard}>
          <h2>Publish Changes</h2>
          <p style={{marginBottom: '1rem'}}>
            Because your site is highly optimized and static, you need to trigger a rebuild for new products to show up on the public website.
          </p>
          <button 
            className="btn" 
            style={{background: '#10b981', color: 'white'}}
            onClick={async () => {
              const hook = process.env.NEXT_PUBLIC_NETLIFY_BUILD_HOOK;
              if (!hook) {
                alert("NEXT_PUBLIC_NETLIFY_BUILD_HOOK is not set in your environment variables!");
                return;
              }
              try {
                await fetch(hook, { method: 'POST' });
                alert("Rebuild triggered! Your changes will be live in ~1-2 minutes.");
              } catch (e) {
                alert("Failed to trigger rebuild: " + e.message);
              }
            }}
          >
            🚀 Publish / Rebuild Site
          </button>
        </div>

        <h2>Manage Products</h2>
        <div className={styles.productGrid}>
          {products.map(product => (
            <div key={product.id} className={styles.productCard}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <div className={styles.productActions}>
                <button onClick={() => handleDelete(product.id)} className="btn" style={{background: '#ff4d4f', color: 'white', padding: '8px 16px', fontSize: '12px'}}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
