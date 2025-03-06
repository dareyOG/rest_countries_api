function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-gray-50 p-[3rem] dark:bg-blue-100 md:px-[6rem]">
      {children}
    </main>
  );
}

export default Main;
