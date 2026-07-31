import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engenharia & código — Aloyr",
  description: "Stack técnica e exemplos autorais de arquitetura full stack, segurança e processamento assíncrono.",
};

const stackGroups = [
  {
    index: "01",
    title: "Frontend & produto",
    description: "Interfaces responsivas, acessíveis e orientadas a fluxos B2B complexos.",
    items: ["Next.js 16", "React 19", "TypeScript 5", "Tailwind CSS 4", "PostCSS", "TanStack Query", "Base UI", "Radix UI", "shadcn", "Recharts", "Motion", "Lucide", "next-themes", "date-fns", "Sonner", "cmdk", "React Day Picker", "Testing Library"],
  },
  {
    index: "02",
    title: "Backend & APIs",
    description: "Serviços tipados com separação entre endpoints, regras de negócio e persistência.",
    items: ["Python", "FastAPI", "Starlette", "Pydantic", "SQLAlchemy", "Alembic", "Uvicorn", "HTTPX", "Requests", "JWT", "OpenAPI", "python-multipart", "email-validator", "bcrypt", "Passlib", "Cryptography"],
  },
  {
    index: "03",
    title: "Dados & processamento",
    description: "Persistência transacional, cache, filas e processamento de documentos em escala.",
    items: ["PostgreSQL", "psycopg2", "Redis", "Celery", "Celery Beat", "Flower", "pandas", "openpyxl", "python-calamine", "xlrd", "SheetJS", "PDFPlumber", "pypdfium2", "PDF-lib", "Pillow", "Canvas", "lxml", "xml2js", "SignXML", "JSZip", "RAR", "QR Code", "JsBarcode"],
  },
  {
    index: "04",
    title: "Integrações & automação",
    description: "Conectores isolados e automações controladas para sistemas e fontes externas.",
    items: ["REST APIs", "ODBC", "pyodbc", "Firebird", "firebird-driver", "SMTP", "Playwright", "Selenium", "pywinauto", "Beautiful Soup", "curl_cffi", "XML", "XLS/XLSX", "CSV", "PDF"],
  },
  {
    index: "05",
    title: "Infraestrutura & operação",
    description: "Builds reprodutíveis, processos observáveis e operação preparada para ambientes privados.",
    items: ["Windows Server", "PowerShell", "Docker", "Cloudflare Tunnel", "Caddy", "Git", "GitHub Actions", "Ollama", "Modelos locais"],
  },
  {
    index: "06",
    title: "Qualidade & segurança",
    description: "Validação contínua com segurança aplicada no backend e rastreabilidade operacional.",
    items: ["Pytest", "Vitest", "Testing Library", "Playwright Test", "ESLint", "Type checking", "npm audit", "RBAC", "Multi-tenant", "Audit logs", "CORS", "Rate limiting", "Secure cookies"],
  },
];

const codeSamples = [
  {
    language: "Python · FastAPI",
    title: "Autorização e tenant no backend",
    description: "A API valida permissão e escopo antes de entregar dados. O exemplo usa nomes inteiramente fictícios.",
    code: `@router.get("/workspaces/{workspace_id}/documents")
def list_documents(
    workspace_id: UUID,
    principal: Principal = Depends(require_permission("documents.read")),
    service: DocumentService = Depends(),
):
    principal.assert_workspace_access(workspace_id)
    return service.list_for_workspace(workspace_id=workspace_id)`,
  },
  {
    language: "TypeScript · React Query",
    title: "Estado remoto previsível",
    description: "A chave de cache carrega o contexto do workspace e evita misturar dados entre escopos.",
    code: `export function useDocumentQueue(workspaceId: string) {
  return useQuery({
    queryKey: ["document-queue", workspaceId],
    queryFn: () => api.documents.list({ workspaceId }),
    enabled: Boolean(workspaceId),
    staleTime: 30_000,
  });
}`,
  },
  {
    language: "Python · Celery",
    title: "Job assíncrono idempotente",
    description: "O banco preserva a fonte da verdade; o worker pode repetir com segurança e registrar o resultado.",
    code: `@celery_app.task(bind=True, autoretry_for=(TransientError,))
def process_demo_job(self, job_id: str) -> dict:
    job = jobs.claim_once(job_id)
    if job.is_terminal:
        return {"status": job.status}

    result = processor.run(job.synthetic_payload)
    jobs.complete(job.id, result=result)
    return {"status": "completed"}`,
  },
];

export default function EngineeringPage() {
  return (
    <main className="engineering-page">
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="Aloyr — início">
          <span>AY</span><strong>Aloyr</strong>
        </a>
        <nav aria-label="Navegação da página">
          <a href="/">Portfólio</a>
          <a href="#stack">Tecnologias</a>
          <a href="#codigo">Código</a>
          <a href="https://ylaros.github.io/zns-portfolio-demo/">Demo ↗</a>
        </nav>
      </header>

      <section className="engineering-hero">
        <div className="hero-kicker"><span /> Engenharia por dentro</div>
        <h1>Stack completa.<br /><em>Decisões visíveis.</em></h1>
        <div className="engineering-intro">
          <p>Um mapa público das tecnologias aplicadas no produto de referência e exemplos de código criados exclusivamente para este portfólio.</p>
          <span>Nenhum trecho foi copiado do sistema original.</span>
        </div>
      </section>

      <section className="stack-section" id="stack">
        <div className="section-label">Tecnologias <span>Por categoria</span></div>
        <div className="stack-grid">
          {stackGroups.map((group) => (
            <article key={group.index}>
              <div className="stack-heading"><span>{group.index}</span><h2>{group.title}</h2></div>
              <p>{group.description}</p>
              <div className="stack-items">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
        <p className="public-scope-note">Inventário deliberadamente limitado a tecnologias e práticas públicas. Configurações, endereços, nomes internos e integrações identificáveis não são exibidos.</p>
      </section>

      <section className="code-section" id="codigo">
        <div className="section-label">Código demonstrativo <span>100% autoral e sintético</span></div>
        <div className="code-list">
          {codeSamples.map((sample, index) => (
            <article key={sample.title}>
              <div className="code-copy">
                <span>{String(index + 1).padStart(2, "0")} / {sample.language}</span>
                <h2>{sample.title}</h2>
                <p>{sample.description}</p>
              </div>
              <pre><code>{sample.code}</code></pre>
            </article>
          ))}
        </div>
        <div className="source-links">
          <a href="https://github.com/Ylaros/Ylaros.github.io">Código deste portfólio <span>↗</span></a>
          <a href="https://github.com/Ylaros/zns-portfolio-demo">Código da demonstração <span>↗</span></a>
        </div>
      </section>

      <section className="security-note" aria-label="Nota de segurança">
        <span className="lock-mark">⌁</span>
        <div><p>Demonstração técnica sem exposição do produto real.</p><small>Os exemplos não contêm regras proprietárias, dados, credenciais, URLs ou estrutura interna do sistema de origem.</small></div>
      </section>
    </main>
  );
}
