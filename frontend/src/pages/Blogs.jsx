import PageHero from '../components/PageHero';

const Blogs = () => {
  return (
    <div>
      <PageHero title="Blogs" />
      <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-light)' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary)', marginBottom: '20px' }}>Our Blogs</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
          Insights, stories, and news from the Samadhantra ecosystem. We share our vision, 
          technological breakthroughs, and industry perspectives to keep you informed.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
