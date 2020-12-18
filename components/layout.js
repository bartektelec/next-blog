import Meta from '../components/meta';

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className='min-h-screen pt-12'>
        <main>{children}</main>
      </div>
    </>
  );
}
