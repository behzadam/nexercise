export default function ProductsLayout({
  children,
  dialog,
}: {
  children: React.ReactNode;
  dialog: React.ReactNode;
}) {
  return (
    <>
      {children}
      {dialog}
    </>
  );
}
