import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';


const Dropdown = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', top: '2.4rem', right: '16.5rem', width: '140px', padding: '10px', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', zIndex: 1 }}>
    <ul style={{ display: 'flex', flexDirection: 'column', gap: '2px', position: 'relative', fontSize: '10px', margin: 0, padding: 0, listStyle: 'none' }}>
      {categories.map((category, index) => (
        <li key={index} style={{ display: 'block', padding: '4px' }}>
          <Link href={`/category/${category.slug}`}>
            <a style={{ color: '#333', textDecoration: 'none', fontWeight: '500', borderRadius: '4px', transition: 'all 0.2s ease-in-out', backgroundColor: '#fff', ':hover': { backgroundColor: '#f5f5f5' } }}>{category.name}</a>
          </Link>
        </li>
      ))}
      <li style={{ position: 'absolute', top: '-0.6rem', right: '1.3rem', width: '20px', height: '20px', transform: 'rotate(45deg)', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', zIndex: -1 }}></li>
    </ul>
  </div>
  );
};

export default Dropdown;
