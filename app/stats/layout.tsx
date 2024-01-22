import TopNav from "@/app/ui/topnav";

export default function StatsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="w-full flex-none">
        <TopNav />
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}
