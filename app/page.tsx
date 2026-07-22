const repos = [
  { name: "API Contracts", repo: "api-contracts", desc: "فضای انتشار OpenAPI، AsyncAPI، Schema و مجموعه‌های Postman", status: "در حال تدوین" },
  { name: "Python SDK", repo: "sdk-python", desc: "SDK برنامه‌ریزی‌شده برای سرویس‌ها و اتوماسیون Python", status: "برنامه‌ریزی‌شده" },
  { name: "Java SDK", repo: "sdk-java", desc: "SDK برنامه‌ریزی‌شده برای Java و سامانه‌های سازمانی", status: "برنامه‌ریزی‌شده" },
  { name: "CoreLink CLI", repo: "cli", desc: "ابزار خط فرمان برنامه‌ریزی‌شده برای توسعه و عملیات", status: "برنامه‌ریزی‌شده" },
  { name: "MCP Server", repo: "mcp-server", desc: "مسیر پیشنهادی اتصال عامل‌های هوشمند به قابلیت‌های CoreLink", status: "برنامه‌ریزی‌شده" },
  { name: "Mock Server", repo: "mock-server", desc: "شبیه‌ساز برنامه‌ریزی‌شده برای توسعه و تست مستقل", status: "برنامه‌ریزی‌شده" },
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

function BrandSymbol({ className = "" }: { className?: string }) {
  return <img className={className} src="/brand/corelink-symbol.svg" width="160" height="160" alt="" aria-hidden="true" />;
}

function Logo() {
  return <a className="brand" href="#top" aria-label="CoreLink — صفحه اصلی"><BrandSymbol className="brand-symbol" /><span className="wordmark"><strong>Core<span>Link</span></strong><small>زیرساخت اتصال و یکپارچه‌سازی محصولات هوشمند</small></span></a>;
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
          <p>CoreLink یک پلتفرم در حال توسعه برای اتصال دستگاه‌ها، یکپارچه‌سازی داده و ساخت محصولات White-label است؛ با تمرکز نخست بر خودرو و ناوگان و مسیر توسعه برای ردیاب حیوانات و دیگر محصولات IoT.</p>
          <div className="actions">
            <a className="button primary" href="#developers">شروع برای توسعه‌دهندگان <span>←</span></a>
            <a className="button secondary" href="#platform">معرفی پلتفرم</a>
          </div>
          <div className="hero-note"><span className="pulse" /> API-first · Multi-tenant · Deployment-flexible</div>
        </div>

        <div className="core-visual" aria-label="نمودار اتصال محصولات به هسته CoreLink">
          <div className="world-grid" />
          <div className="orbit o1" /><div className="orbit o2" /><div className="orbit o3" />
          <div className="core"><BrandSymbol className="core-symbol" /><small>CORELINK</small></div>
          <div className="node vehicle"><span><Icon name="car" /></span><b>Vehicle</b><small>Telemetry</small></div>
          <div className="node pet"><span><Icon name="pet" /></span><b>Pet Tracker</b><small>Location</small></div>
          <div className="node apps"><span><Icon name="layers" /></span><b>White-label</b><small>Applications</small></div>
          <div className="node sdk"><span><Icon name="code" /></span><b>SDK & API</b><small>Developers</small></div>
          <div className="node cloud"><span><Icon name="cloud" /></span><b>Cloud</b><small>Services</small></div>
          <div className="packet p1" /><div className="packet p2" /><div className="packet p3" />
        </div>
      </section>

      <div className="trust shell">
        <div><Icon name="code" /><span><b>API-first</b><small>طراحی قراردادمحور</small></span></div>
        <div><Icon name="layers" /><span><b>Multi-tenant</b><small>معماری چندمستاجری</small></span></div>
        <div><Icon name="shield" /><span><b>White-label</b><small>برند و تجربه مستقل</small></span></div>
        <div><Icon name="cloud" /><span><b>Flexible deployment</b><small>مسیر SaaS و استقرار اختصاصی</small></span></div>
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
        <div className="section-heading"><div><div className="section-label">محصولات متصل، یک هسته <span>02</span></div><h2>یک پلتفرم؛ چند مسیر بازار</h2></div><p>هدف CoreLink جداکردن قابلیت‌های مشترک زیرساخت از تجربه‌ی هر بازار است؛ تا هر محصول بتواند برند، قواعد و مدل کسب‌وکار خودش را داشته باشد.</p></div>
        <div className="solution-grid">
          <article className="solution-card featured"><div className="card-top"><span className="icon-box"><Icon name="car" /></span><small>Mobility</small></div><h3>خودرو و ناوگان متصل</h3><p>مسیر نخست محصول برای دریافت موقعیت، تله‌متری و رویداد، مدیریت دستگاه و ساخت پنل عملیات؛ با لایه‌های تطبیق برای کاهش وابستگی به یک پروتکل مشخص.</p><ul><li>ردیابی و Geofence</li><li>رویداد و هشدار</li><li>ویدئو و رسانه</li><li>یکپارچه‌سازی سازمانی</li></ul><div className="card-art car-art"><i /><span>35.7219° N</span><b>Online</b></div></article>
          <article className="solution-card"><div className="card-top"><span className="icon-box"><Icon name="pet" /></span><small>Pet Tech</small></div><h3>ردیاب و خدمات حیوانات</h3><p>مسیر محصولی در مرحله طراحی برای ردیاب حیوانات خانگی و شهری؛ شامل موقعیت، محدوده امن، پروفایل حیوان و سرویس‌های مشارکتی مبتنی بر مکان.</p><ul><li>موقعیت و محدوده امن</li><li>پروفایل حیوان</li><li>شبکه مراقبان</li><li>API برای شرکا</li></ul><div className="card-art pet-art"><span>LIAM</span><i>●</i><b>Safe zone</b></div></article>
          <article className="solution-card"><div className="card-top"><span className="icon-box"><Icon name="layers" /></span><small>B2B2C</small></div><h3>محصول و اپلیکیشن White-label</h3><p>مدل B2B2C برای ارائه‌ی محصول با برند، دامنه و تجربه‌ی هر شریک؛ روی هسته‌ای مشترک با مرزبندی مستاجرها، نقش‌ها و داده‌ها.</p><ul><li>برند و تجربه اختصاصی</li><li>Tenant مستقل</li><li>نقش و دسترسی</li><li>SaaS یا استقرار اختصاصی</li></ul><div className="card-art label-art"><i>Brand A</i><i>Brand B</i><i>Brand C</i></div></article>
        </div>
      </section>

      <section className="architecture section" id="architecture">
        <div className="shell">
          <div className="section-heading light"><div><div className="section-label">معماری پلتفرم <span>03</span></div><h2>پیاده‌سازی عوض می‌شود؛ قرارداد محصول ثابت می‌ماند.</h2></div><p>اصل معماری CoreLink این است که API عمومی، قابلیت محصول را توصیف کند نه نام ابزار داخلی را. با تثبیت و نسخه‌بندی قراردادها، اجزای زیرساخت می‌توانند با کمترین اثر بر یکپارچه‌سازی مشتری تکامل پیدا کنند.</p></div>
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
        <div className="dev-copy"><div className="section-label">ساخته‌شده برای توسعه‌دهنده <span>04</span></div><h2>از اولین درخواست تا محصول واقعی، مسیر باید روشن باشد.</h2><p>سطح توسعه‌دهندگان CoreLink در حال شکل‌گیری است: قراردادهای قابل خواندن توسط ماشین در اولویت‌اند و SDKها، CLI، Mock Server و MCP Server در نقشه راه عمومی قرار دارند. هنوز بسته‌ی رسمی قابل نصب منتشر نشده است.</p><div className="dev-links"><a href="https://github.com/CoreLinkPlatform/api-contracts" target="_blank" rel="noreferrer">مشاهده API Contracts ↗</a><a href="https://github.com/CoreLinkPlatform" target="_blank" rel="noreferrer">همه‌ی مخزن‌ها ↗</a></div></div>
        <div className="terminal" dir="ltr"><div className="terminal-head"><span><i/><i/><i/></span><b>target-contract.http</b><small>API design preview</small></div><pre><code><span className="pink">POST</span> /v1/devices
Authorization: Bearer <span className="cyan">$ACCESS_TOKEN</span>
Content-Type: application/json

{'{'}
  <span className="blue">&quot;external_id&quot;</span>: <span className="green">&quot;device-1024&quot;</span>,
  <span className="blue">&quot;type&quot;</span>: <span className="green">&quot;vehicle_tracker&quot;</span>,
  <span className="blue">&quot;tenant_id&quot;</span>: <span className="green">&quot;tenant_id&quot;</span>
{'}'}</code></pre><div className="terminal-result"><span>DESIGN PREVIEW</span><b>نمونه‌ی جهت‌گیری قرارداد؛ نه API منتشرشده</b></div></div>
      </section>

      <section className="open-source shell">
        <div className="section-heading"><div><div className="section-label">Developer surface <span>05</span></div><h2>زیرساخت خصوصی؛ سطح توسعه‌ی عمومی و استاندارد.</h2></div><p>هسته‌ی تجاری خصوصی می‌ماند و مخزن‌های عمومی برای انتشار تدریجی قراردادها، مستندات و ابزارهای ادغام آماده شده‌اند. وضعیت هر مورد صریحاً در همان مخزن اعلام می‌شود.</p></div>
        <div className="repo-grid">{repos.map((item) => <a key={item.repo} href={`https://github.com/CoreLinkPlatform/${item.repo}`} target="_blank" rel="noreferrer"><div><span className="repo-icon">&lt;/&gt;</span><b>{item.name}</b></div><span className="repo-status">{item.status}</span><p>{item.desc}</p><small>CoreLinkPlatform/{item.repo} <i>↗</i></small></a>)}</div>
      </section>

      <section className="vision section" id="vision">
        <div className="shell vision-grid"><div><div className="section-label">فرصت ساخت یک زیرساخت پایه <span>06</span></div><h2>بازار به یک اپلیکیشن دیگر نیاز ندارد؛ به لایه‌ای برای ساخت ده‌ها محصول نیاز دارد.</h2><p>CoreLink از تجربه‌ی عملی اتصال سخت‌افزارها و سامانه‌های ناهمگون شکل گرفته است. فرضیه‌ی محصول این است که بخش بزرگی از این پیچیدگی میان بازارهای مختلف مشترک است و می‌تواند به یک زیرساخت B2B2C قابل تکرار تبدیل شود.</p></div><div className="vision-points"><article><b>01</b><h3>مسئله‌ی شناخته‌شده</h3><p>پیچیدگی اتصال، چندپروتکلی و White-label در پروژه‌های واقعی.</p></article><article><b>02</b><h3>هسته‌ی قابل تکرار</h3><p>معماری چندمستاجری و قراردادهای API با امکان استفاده در چند صنعت.</p></article><article><b>03</b><h3>مسیر ورود متمرکز</h3><p>شروع از خودرو و ناوگان؛ اعتبارسنجی مسیر ردیاب حیوانات در گام بعد.</p></article><article><b>04</b><h3>نیاز روشن به شتاب‌دهی</h3><p>تبدیل زیرساخت فنی به محصول، اجرای پایلوت و ساخت کانال فروش B2B.</p></article></div></div>
      </section>

      <section className="cta-section shell"><div className="cta-core"><BrandSymbol className="cta-symbol" /></div><div><small>CORELINK PLATFORM</small><h2>محصول هوشمند بعدی را روی یک زیرساخت مشترک بسازیم.</h2><p>برای همکاری فنی، اجرای پایلوت، سرمایه‌گذاری یا ساخت یک راهکار White-label با ما در ارتباط باشید.</p></div><div className="actions"><a className="button primary" href="https://www.linkedin.com/in/jaavid" target="_blank" rel="noreferrer">گفت‌وگو درباره همکاری <span>↗</span></a><a className="button secondary" href="https://github.com/CoreLinkPlatform" target="_blank" rel="noreferrer">مشاهده GitHub</a></div></section>

      <footer className="footer shell"><Logo/><p>زیرساخت اتصال و یکپارچه‌سازی محصولات هوشمند</p><div><a href="https://github.com/CoreLinkPlatform">GitHub</a><a href="#developers">Developers</a><a href="#top">بازگشت به بالا ↑</a></div><small>© 2026 CoreLink Platform</small></footer>
    </main>
  );
}
