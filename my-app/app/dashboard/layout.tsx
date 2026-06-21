export default function DashboardLayout({ children, sidebar, main }: { children: React.ReactNode; sidebar: React.ReactNode; main: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h1>Dashboard Layout</h1>
      <aside>{sidebar}</aside>
      <main>
        {children}
        {main}
      </main>
    </div>
  );
}