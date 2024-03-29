export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="py-[80px] bg-white">{children}</div>;
}
