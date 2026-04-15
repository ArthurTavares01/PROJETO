export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm font-body">
          © {new Date().getFullYear()} Arthur Tavares. Todos os direitos reservados.
        </p>
        <p className="text-muted-foreground text-xs font-body">
           <span className="text-primary"></span>
        </p>
      </div>
    </footer>
  );
}
