(function () {
  if (typeof window.supabase === "undefined") return;
  const { createClient } = window.supabase;
  window.sb = createClient(
    "https://dtagjkqubrduxpurssin.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0YWdqa3F1YnJkdXhwdXJzc2luIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3MjY0MzgsImV4cCI6MjA5NTMwMjQzOH0.yDbBSZn03WwmyDy4chwH91cWJJw1whirq49EPVgwPFE",
    {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: false,
      },
    }
  );
})();
