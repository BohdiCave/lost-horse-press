import React from 'react';
import Aside from './Aside.js';
import Article from './Article.js';

export default function Container() {
  return (
    <div className="container">
      <main className="row">
        <Aside />
        <Article />
      </main>
    </div>
  );  
}
