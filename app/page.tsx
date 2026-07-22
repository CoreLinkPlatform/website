const repos = [
  { name: "API Contracts", repo: "api-contracts", desc: "OpenAPI، AsyncAPI، Schema و قراردادهای پایدار" },
  { name: "Python SDK", repo: "sdk-python", desc: "یکپارچه‌سازی سرویس‌ها و اتوماسیون با Python" },
  { name: "Java SDK", repo: "sdk-java", desc: "اتصال سامانه‌های سازمانی و اپلیکیشن‌های Java" },
  { name: "CoreLink CLI", repo: "cli", desc: "ابزار خط فرمان برای توسعه و عملیات" },
  { name: "MCP Server", repo: "mcp-server", desc: "اتصال عامل‌های هوشمند به قابلیت‌های پلتفرم" },
  { name: "Mock Server", repo: "mock-server", desc: "توسعه و تست مستقل از محیط عملیاتی" },
];

const Icon = ({ name }: { name: "car" | "pet" | "layers" | "code" | "cloud" | "shield" }) => {
  const paths = {
    car: <><path d="M5 16h14l-1.5-5.5a2 2 0 0 0-1.9-1.5H8.4a2 2 0 0 0-1.9 1.5L5 16Z"/><path d="M3 16h18v3H3z"/><circle cx="7" cy="19" r="2"/><circle cx="17" cy="19" r="2"/></>,
    pet: <><circle cx="8" cy="7" r="2"/><circle cx="16" cy="7" r="2"/><circle cx="5" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><path d="M12 11c-4 0-6 4-5 7 1 3 4 2 5 1 1 1 4 2 5-1 1-3-1-7-5-7Z"/></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></>,
    code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></>,
    cloud: <path d="M7 18h11a4 4 0 0 0 .4-8A6 6 0 0 0 7 8.5 4.8 4.8 0 0 0 7 18Z"/>,
    shield: <path d="M12 3 5 6v5c0 4.6 2.8 8.3 7 10 4.2-1.7 7-5.4 7-10V6l-7-3Zm-3 9 2 2 4-4"/>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
};

function Logo() {
  return <a className="brand" href="#top" aria-label="CoreLink Platform — صفحه اصلی"><span className="brand-mark"><i /><b /></span><span><strong>CoreLink</strong><small>PLATFORM</small></span></a>;
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header shell">
        <Logo />
        <nav aria-label="ناوبری اصلی">
          <a href="#platform">پلتفرم</a><a href="#solutions">راهکارها</a><a href="#developers">توسعه‌دهندگان</a><a href="#vision">چشم‌انداز</a>
        </nav>
        <a className="header-cta" href="https://github.com/CoreLinkPlatform" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Connected Product Infrastructure</div>
          <h1>هسته‌ی اتصال و یکپارچه‌سازی <em>محصولات هوشمند</em></h1>
          <p>یک زیرساخت واحد برای اتصال دستگاه‌ها، مدیریت داده و ساخت تجربه‌های White-label؛ از خودرو و ناوگان تا ردیاب حیوانات و محصولات IoT.</p>
          <div className="actions">
            <a className="button primary" href="#developers">شروع برای توسعه‌دهندگان <span>←</span></a>
            <a className="button secondary" href="#platform">معرفی پلتفرم</a>
          </div>
          <div className="hero-note"><span className="pulse" /> API-first · Multi-tenant · Deployment-flexible</div>
        </div>

        <div className="core-visual" aria-label="نمودار اتصال محصولات به هسته CoreLink">
          <div className="world-grid" />
          <div className="orbit o1" /><div className="orbit o2" /><div className="orbit o3" />
          <div className="core"><span className="brand-mark large"><i /><b /></span><small>CORE</small></div>
          <div className="node vehicle"><span><Icon name="car" /></span><b>Vehicle</b><small>Telemetry</small></div>
          <div className="node pet"><span><Icon name="pet" /></span><b>Pet Tracker</b><small>Location</small></div>
          <div className="node apps"><span><Icon name="layers" /></span><b>White-label</b><small>Applications</small></div>
          <div className="node sdk"><span><Icon name="code" /></span><b>SDK & API</b><small>Developers</small></div>
          <div className="node cloud"><span><Icon name="cloud" /></span><b>Cloud</b><small>Services</small></div>
          <div className="packet p1" /><div className="packet p2" /><div className="packet p3" />
        </div>
      </section>

      <div className="trust shell">
        <div><Icon name="code" /><span><b>API-first</b><small>قراردادهای پایدار</small></span></div>
        <div><Icon name="layers" /><span><b>Multi-tenant</b><small>تفکیک کامل مشتریان</small></span></div>
        <div><Icon name="shield" /><span><b>Enterprise-ready</b><small>کنترل، امنیت و مقیاس</small></span></div>
        <div><Icon name="cloud" /><span><b>Flexible deployment</b><small>SaaS · White-label · On-prem</small></span></div>
      </div>

      <section className="problem shell section" id="platform">
        <div className="section-label">مسئله‌ای که حل می‌کنیم <span>01</span></div>
        <div className="problem-grid">
          <div><h2>هر محصول هوشمند نباید از صفر یک پلتفرم بسازد.</h2><p>پروتکل دستگاه، احراز هویت، نقشه، اعلان، استریم، اپلیکیشن و پنل عملیات معمولاً به جزیره‌های جدا تبدیل می‌شوند. نتیجه: زمان عرضه‌ی طولانی، هزینه‌ی نگهداری بالا و قفل‌شدن کسب‌وکار به یک تأمین‌کننده.</p></div>
          <div className="before-after">
            <article><small>وضعیت رایج</small><div className="chaos"><i>Device</i><i>App</i><i>Map</i><i>Cloud</i><i>Data</i></div><p>اتصال‌های نقطه‌به‌نقطه و چند منبع حقیقت</p></article>
            <span className="transform">←</span>
            <article className="after"><small>با CoreLink</small><div className="mini-core"><b>CORE</b><i>API</i><i>Event</i><i>Data</i></div><p>یک لایه‌ی مفهومی پایدار برای همه‌ی محصولات</p></article>
          </div>
        </div>
      </section>

      <section className="solutions section shell" id="solutions">
        <div className="section-heading"><div><div className="section-label">محصولات متصل، یک هسته <span>02</span></div><h2>یک پلتفرم؛ چند مسیر بازار</h2></div><p>CoreLink زیرساخت مشترک را حفظ می‌کند و اجازه می‌دهد هر بازار، تجربه و مدل کسب‌وکار خودش را داشته باشد.</p></div>
        <div className="solution-grid">
          <article className="solution-card featured"><div className="card-top"><span className="icon-box"><Icon name="car" /></span><small>Mobility</small></div><h3>خودرو و ناوگان متصل</h3><p>دریافت تله‌متری، موقعیت و رویداد؛ مدیریت دستگاه و فرمان؛ ساخت پنل عملیات و تجربه‌ی راننده بدون وابستگی به یک پروتکل خاص.</p><ul><li>ردیابی و Geofence</li><li>رویداد و هشدار</li><li>ویدئو و رسانه</li><li>یکپارچه‌سازی سازمانی</li></ul><div className="card-art car-art"><i /><span>35.7219° N</span><b>Online</b></div></article>
          <article className="solution-card"><div className="card-top"><span className="icon-box"><Icon name="pet" /></span><small>Pet Tech</small></div><h3>ردیاب و خدمات حیوانات</h3><p>زیرساخت قابل توسعه برای ردیاب‌های حیوانات خانگی و شهری؛ از موقعیت زنده تا پرونده، مراقبت جمعی و سرویس‌های مبتنی بر مکان.</p><ul><li>موقعیت و محدوده امن</li><li>پروفایل حیوان</li><li>شبکه مراقبان</li><li>API برای شرکا</li></ul><div className="card-art pet-art"><span>LIAM</span><i>●</i><b>Safe zone</b></div></article>
          <article className="solution-card"><div className="card-top"><span className="icon-box"><Icon name="layers" /></span><small>B2B2C</small></div><h3>محصول و اپلیکیشن White-label</h3><p>هر شریک تجاری با برند، دامنه، قوانین و تجربه‌ی خودش؛ روی یک هسته‌ی مشترک با تفکیک داده و عملیات.</p><ul><li>برند و تجربه اختصاصی</li><li>Tenant مستقل</li><li>نقش و دسترسی</li><li>SaaS یا استقرار اختصاصی</li></ul><div className="card-art label-art"><i>Brand A</i><i>Brand B</i><i>Brand C</i></div></article>
        </div>
      </section>

      <section className="architecture section" id="architecture">
        <div className="shell">
          <div className="section-heading light"><div><div className="section-label">معماری پلتفرم <span>03</span></div><h2>پیاده‌سازی عوض می‌شود؛ قرارداد محصول ثابت می‌ماند.</h2></div><p>APIهای عمومی CoreLink قابلیت‌های محصول را توصیف می‌کنند، نه نام و جزئیات ابزارهای داخلی را. بنابراین زیرساخت می‌تواند تکامل پیدا کند، بدون اینکه اپلیکیشن مشتری دوباره نوشته شود.</p></div>
          <div className="layer-stack">
            <div className="layer consumer"><b>Experiences</b><span>پنل عملیات</span><span>اپ موبایل</span><span>White-label</span><span>اتوماسیون سازمانی</span></div>
            <div className="flow">↑ REST · Webhooks · Events · SDKs ↑</div>
            <div className="layer core-layer"><b>CoreLink Capability Layer</b><span>Identity</span><span>Device Registry</span><span>Digital Twin</span><span>Telemetry</span><span>Commands</span><span>Media</span></div>
            <div className="flow">↑ Protocol adapters & connectors ↑</div>
            <div className="layer devices"><b>Connected World</b><span>Vehicle</span><span>Pet Tracker</span><span>Camera</span><span>Sensor</span><span>Business Systems</span></div>
          </div>
        </div>
      </section>

      <section className="developers section shell" id="developers">
        <div className="dev-copy"><div className="section-label">ساخته‌شده برای توسعه‌دهنده <span>04</span></div><h2>از اولین درخواست تا محصول واقعی، مسیر باید روشن باشد.</h2><p>قراردادهای قابل خواندن توسط ماشین، SDKهای رسمی، Mock Server و ابزار خط فرمان، اتصال به CoreLink را قابل پیش‌بینی و قابل تست می‌کنند. MCP Server هم مسیر استفاده‌ی عامل‌های هوشمند از پلتفرم را باز می‌کند.</p><div className="dev-links"><a href="https://github.com/CoreLinkPlatform/api-contracts" target="_blank" rel="noreferrer">مشاهده API Contracts ↗</a><a href="https://github.com/CoreLinkPlatform" target="_blank" rel="noreferrer">همه‌ی مخزن‌ها ↗</a></div></div>
        <div className="terminal" dir="ltr"><div className="terminal-head"><span><i/><i/><i/></span><b>quickstart.ts</b><small>TypeScript</small></div><pre><code><span className="pink">import</span> {'{'} CoreLink {'}'} <span className="pink">from</span> <span className="green">&quot;@corelink/sdk&quot;</span>;

<span className="pink">const</span> corelink = <span className="pink">new</span> <span className="blue">CoreLink</span>({'{'}
  baseUrl: process.env.<span className="cyan">CORELINK_API_URL</span>,
  accessToken: <span className="pink">async</span> () =&gt; token,
{'}'});

<span className="pink">const</span> devices = <span className="pink">await</span> corelink.devices.<span className="blue">list</span>({'{'}
  tenantId: <span className="green">&quot;tenant_id&quot;</span>,
{'}'});

console.<span className="blue">log</span>(devices.items);</code></pre><div className="terminal-result"><span>200 OK</span><b>↳ 24 connected devices</b></div></div>
      </section>

      <section className="open-source shell">
        <div className="section-heading"><div><div className="section-label">Developer surface <span>05</span></div><h2>زیرساخت خصوصی؛ سطح توسعه‌ی عمومی و استاندارد.</h2></div><p>هسته‌ی تجاری خصوصی می‌ماند، اما قراردادها، ابزارها و مسیرهای ادغام در مخزنهای عمومی و قابل نسخه‌بندی منتشر می‌شوند.</p></div>
        <div className="repo-grid">{repos.map((item) => <a key={item.repo} href={`https://github.com/CoreLinkPlatform/${item.repo}`} target="_blank" rel="noreferrer"><div><span className="repo-icon">&lt;/&gt;</span><b>{item.name}</b></div><p>{item.desc}</p><small>CoreLinkPlatform/{item.repo} <i>↗</i></small></a>)}</div>
      </section>

      <section className="vision section" id="vision">
        <div className="shell vision-grid"><div><div className="section-label">فرصت ساخت یک زیرساخت پایه <span>06</span></div><h2>بازار به یک اپلیکیشن دیگر نیاز ندارد؛ به لایه‌ای برای ساخت ده‌ها محصول نیاز دارد.</h2><p>CoreLink از یک مسئله‌ی واقعی آغاز شده: اتصال سخت‌افزارهای ناهمگون به تجربه‌های قابل فروش. مسیر رشد، تکرار همان زیرساخت در بازارهای خودرو، حیوانات و محصولات هوشمند نیست؛ تبدیل آن به یک هسته‌ی مشترک B2B2C است.</p></div><div className="vision-points"><article><b>01</b><h3>مسئله اثبات‌شده</h3><p>پیچیدگی اتصال، چندپروتکلی و White-label در پروژه‌های واقعی.</p></article><article><b>02</b><h3>دارایی قابل تکرار</h3><p>هسته چندمستاجری، قرارداد API و ابزار توسعه؛ قابل استفاده در چند صنعت.</p></article><article><b>03</b><h3>مسیر ورود روشن</h3><p>شروع با راهکارهای خودرو و ردیاب حیوان، سپس توسعه اکوسیستم شرکا.</p></article><article><b>04</b><h3>آماده‌ی شتاب‌گیری</h3><p>تمرکز سرمایه و شتاب‌دهی روی محصول‌سازی، پایلوت و کانال فروش B2B.</p></article></div></div>
      </section>

      <section className="cta-section shell"><div className="cta-core"><span className="brand-mark large"><i/><b/></span></div><div><small>CORELINK PLATFORM</small><h2>محصول هوشمند بعدی را روی یک هسته‌ی آماده بسازیم.</h2><p>برای همکاری فنی، اجرای پایلوت، سرمایه‌گذاری یا ساخت یک راهکار White-label با ما در ارتباط باشید.</p></div><div className="actions"><a className="button primary" href="https://www.linkedin.com/in/jaavid" target="_blank" rel="noreferrer">گفت‌وگو درباره همکاری <span>↗</span></a><a className="button secondary" href="https://github.com/CoreLinkPlatform" target="_blank" rel="noreferrer">مشاهده GitHub</a></div></section>

      <footer className="footer shell"><Logo/><p>زیرساخت اتصال و یکپارچه‌سازی محصولات هوشمند</p><div><a href="https://github.com/CoreLinkPlatform">GitHub</a><a href="#developers">Developers</a><a href="#top">بازگشت به بالا ↑</a></div><small>© 2026 CoreLink Platform</small></footer>
    </main>
  );
}
