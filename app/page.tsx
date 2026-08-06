import {
  ArrowLeft,
  ArrowUp,
  BellRing,
  CarFront,
  Cat,
  CloudCog,
  Code2,
  ExternalLink,
  House,
  Layers3,
  PawPrint,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import ConnectedOrbit from "./ConnectedOrbit";
import DeveloperCodeSamples from "./DeveloperCodeSamples";
import DeviceSupportSection from "./DeviceSupportSection";

const repos = [
  {
    name: "API Contracts",
    repo: "api-contracts",
    desc: "قرارداد عمومی Device و Command و envelope رویداد",
    status: "Alpha · 1.0.0-draft",
  },
  {
    name: "TypeScript SDK",
    repo: "sdk-typescript",
    desc: "کلاینت تولیدشده از قرارداد عمومی v1؛ هنوز انتشار پایدار نیست",
    status: "Prerelease Alpha",
  },
  {
    name: "Python SDK",
    repo: "sdk-python",
    desc: "کلاینت تولیدشده از قرارداد عمومی v1؛ هنوز انتشار پایدار نیست",
    status: "Prerelease Alpha",
  },
  {
    name: "Java SDK",
    repo: "sdk-java",
    desc: "SDK برنامه‌ریزی‌شده برای Java و سامانه‌های سازمانی",
    status: "Scaffold · Planned",
  },
  {
    name: "CoreLink CLI",
    repo: "cli",
    desc: "ابزار خط فرمان برنامه‌ریزی‌شده برای توسعه و عملیات",
    status: "Scaffold · Planned",
  },
  {
    name: "MCP Server",
    repo: "mcp-server",
    desc: "مسیر پیشنهادی اتصال عامل‌های هوشمند به قابلیت‌های CoreLink",
    status: "Scaffold · Planned",
  },
  {
    name: "Mock Server",
    repo: "mock-server",
    desc: "شبیه‌ساز برنامه‌ریزی‌شده برای توسعه و تست مستقل",
    status: "Scaffold · Planned",
  },
];

const iconMap = {
  car: CarFront,
  pet: PawPrint,
  layers: Layers3,
  code: Code2,
  cloud: CloudCog,
  shield: ShieldCheck,
} satisfies Record<string, LucideIcon>;

function Icon({ name }: { name: keyof typeof iconMap }) {
  const Glyph = iconMap[name];
  return <Glyph aria-hidden="true" strokeWidth={1.65} />;
}

function BrandSymbol({ className = "" }: { className?: string }) {
  return (
    <img
      className={className}
      src="/brand/corelink-symbol.svg"
      width="160"
      height="160"
      alt=""
      aria-hidden="true"
    />
  );
}

function Logo() {
  return (
    <a className="brand" href="#top" aria-label="CoreLink، صفحه اصلی">
      <BrandSymbol className="brand-symbol" />
      <span className="wordmark">
        <strong>
          Core<span>Link</span>
        </strong>
        <small>زیرساخت اتصال و یکپارچه‌سازی محصولات هوشمند</small>
      </span>
    </a>
  );
}

function PetSafetyMap() {
  return (
    <div
      className="pet-map"
      role="img"
      aria-label="لیام داخل محدوده امن خانه است و نینوش بیرون از محدوده قرار دارد"
    >
      <div className="map-road road-one" />
      <div className="map-road road-two" />
      <div className="map-road road-three" />
      <div className="safe-zone">
        <span>محدوده امن خانه</span>
      </div>
      <div className="home-marker" title="خانه">
        <House aria-hidden="true" size={18} />
      </div>
      <div className="pet-marker liam-marker">
        <span>
          <Cat aria-hidden="true" size={17} />
        </span>
        <b>لیام</b>
        <small>داخل محدوده</small>
      </div>
      <div className="pet-marker ninoosh-marker">
        <span>
          <Cat aria-hidden="true" size={17} />
        </span>
        <b>نینوش</b>
        <small>
          <BellRing aria-hidden="true" size={12} /> خارج از محدوده، ارسال هشدار
        </small>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header shell">
        <Logo />
        <a
          className="header-cta"
          href="#contact"
        >
          بررسی یک پایلوت <ArrowLeft aria-hidden="true" size={16} />
        </a>
      </header>
      <div className="section-nav-wrap">
        <nav
          className="section-nav shell"
          aria-label="دسترسی سریع به بخش‌های صفحه"
        >
          <a href="#top">
            معرفی
          </a>
          <a href="#solutions">
            کاربردها
          </a>
          <a href="#device-support">
            سازگاری دستگاه
          </a>
          <a href="#architecture">
            معماری
          </a>
          <a href="#developers">
            توسعه‌دهندگان
          </a>
          <a href="#contact">
            شروع همکاری
          </a>
        </nav>
      </div>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow">
            <span /> زیرساخت محصولات متصل
          </div>
          <h1>
            زیرساخت مشترک برای ساخت و مقیاس‌دادن <em>محصولات هوشمند</em>
          </h1>
          <p>
            دستگاه‌ها و پروتکل‌های مختلف را به یک مدل داده و API نسخه‌دار متصل
            کنید؛ سپس پنل، اپ یا راهکار White-label خود را بدون بازسازی هسته
            عرضه کنید.
          </p>
          <div className="actions">
            <a className="button primary" href="#contact">
              بررسی پایلوت شما <ArrowLeft aria-hidden="true" size={18} />
            </a>
            <a className="button secondary" href="#architecture">
              مشاهده معماری
            </a>
          </div>
          <div className="hero-proof" aria-label="خلاصه قابلیت‌های CoreLink">
            <span><b>1.0.0-draft</b> قرارداد عمومی</span>
            <span><b>TS / Python</b> کلاینت prerelease</span>
            <span><b>Device + Command</b> محدوده فعلی API</span>
          </div>
        </div>

        <div
          className="core-visual"
          aria-label="نمودار اتصال محصولات به هسته CoreLink"
        >
          <div className="world-grid" />
          <div className="core">
            <BrandSymbol className="core-symbol" />
            <small>CORELINK</small>
          </div>
          <ConnectedOrbit />
        </div>
      </section>

      <section className="problem shell section" id="platform">
        <div className="section-label">
          مسئله‌ای که حل می‌کنیم <span>01</span>
        </div>
        <div className="problem-grid">
          <div>
            <h2>برای هر دستگاه، یک پلتفرم تازه نسازید.</h2>
            <p>
              اتصال دستگاه، احراز هویت، نقشه، هشدار، رسانه و پنل عملیات معمولاً
              در چند سامانه جدا ساخته می‌شوند. CoreLink این پیچیدگی مشترک را به
              یک هسته محصول تبدیل می‌کند تا تیم شما روی تجربه بازار خودش متمرکز
              بماند.
            </p>
            <ul className="outcome-list">
              <li><b>عرضه سریع‌تر</b><span>با قراردادها و قابلیت‌های قابل استفاده مجدد</span></li>
              <li><b>وابستگی کمتر</b><span>با مدل داده پایدار روی چند پروتکل و سخت‌افزار</span></li>
              <li><b>عملیات یکپارچه</b><span>برای دستگاه، رویداد، فرمان و رسانه</span></li>
            </ul>
          </div>
          <div className="before-after">
            <article>
              <small>وضعیت رایج</small>
              <div className="chaos">
                <i>Device</i>
                <i>App</i>
                <i>Map</i>
                <i>Cloud</i>
                <i>Data</i>
              </div>
              <p>اتصال‌های نقطه‌به‌نقطه و چند منبع حقیقت</p>
            </article>
            <span className="transform">
              <ArrowLeft aria-hidden="true" size={26} />
            </span>
            <article className="after">
              <small>با CoreLink</small>
              <div className="mini-core">
                <b>CORE</b>
                <i>API</i>
                <i>Event</i>
                <i>Data</i>
              </div>
              <p>یک لایه‌ی مفهومی پایدار برای همه‌ی محصولات</p>
            </article>
          </div>
        </div>
      </section>

      <section className="solutions section shell" id="solutions">
        <div className="section-heading">
          <div>
            <div className="section-label">
              محصولاتی که روی CoreLink ساخته می‌شوند <span>02</span>
            </div>
            <h2>یک هسته؛ چند محصول مستقل</h2>
          </div>
          <p>
            قابلیت‌های مشترک در هسته می‌مانند و هر بازار برند، قواعد، نقش‌ها و
            تجربه خودش را دریافت می‌کند. مسیر نخست، خودرو و ناوگان است.
          </p>
        </div>
        <div className="solution-grid">
          <article className="solution-card ">
            <div className="card-top">
              <span className="icon-box">
                <Icon name="car" />
              </span>
              <small>Mobility</small>
            </div>
            <h3>ناوگان و خودروی متصل</h3>
            <p>
              مسیر اصلی محصول برای دریافت موقعیت، تله‌متری و رویداد، مدیریت
              دستگاه و ساخت پنل عملیات روی چند مدل سخت‌افزار.
            </p>
            <ul>
              <li>ردیابی و کنترل محدوده‌های جغرافیایی</li>
              <li>رویداد و هشدار</li>
              <li>ویدئو و رسانه</li>
              <li>یکپارچه‌سازی سازمانی</li>
            </ul>
            <div className="card-art car-art">
              <i />
              <span>35.7219° N</span>
              <b>Online</b>
            </div>
          </article>
          <article className="solution-card featured">
            <div className="card-top">
              <span className="icon-box">
                <Icon name="layers" />
              </span>
              <small>B2B2C · Planned</small>
            </div>
            <h3>محصول White-label</h3>
            <p>
              ارائه محصول با برند، دامنه و تجربه هر شریک روی هسته‌ای مشترک؛ با
              مرزبندی روشن مستاجرها، نقش‌ها و داده‌ها.
            </p>
            <ul>
              <li>برند و تجربه اختصاصی</li>
              <li>Tenant مستقل</li>
              <li>نقش و دسترسی</li>
              <li>الگوی استقرار در حال طراحی</li>
            </ul>
            <div className="card-art label-art">
              <i>Brand A</i>
              <i>Brand B</i>
              <i>Brand C</i>
            </div>
          </article>
          <article className="solution-card pet-solution">
            <div className="card-top">
              <span className="icon-box">
                <Icon name="pet" />
              </span>
              <small>Pet Tech</small>
            </div>
            <h3>ردیاب حیوانات</h3>
            <p>
              مسیر در حال اعتبارسنجی برای ردیاب حیوانات خانگی و شهری؛ شامل
              موقعیت، محدوده امن، پروفایل حیوان و شبکه مراقبان.
            </p>
            <ul>
              <li>موقعیت و محدوده امن</li>
              <li>پروفایل حیوان</li>
              <li>شبکه مراقبان</li>
              <li>API برای شرکا</li>
            </ul>
            <div className="card-art pet-art">
              <PetSafetyMap />
            </div>
          </article>          
        </div>
      </section>

      <DeviceSupportSection />

      <section className="architecture section" id="architecture">
        <div className="shell">
          <div className="section-heading light">
            <div>
              <div className="section-label">
                معماری پلتفرم <span>04</span>
              </div>
          <h2>اجزای فنی تغییر می‌کنند؛ قرارداد محصول پایدار می‌ماند.</h2>
            </div>
            <p>
              API عمومی قابلیت محصول را توصیف می‌کند، نه ابزار داخلی را. به این
              ترتیب زیرساخت می‌تواند تکامل پیدا کند، بدون اینکه هر تغییر به
              یکپارچه‌سازی مشتری منتقل شود.
            </p>
          </div>
          <div className="layer-stack">
            <div className="layer consumer">
              <b>Experiences</b>
              <span>پنل عملیات</span>
              <span>اپ موبایل</span>
              <span>White-label</span>
              <span>اتوماسیون سازمانی</span>
            </div>
            <div className="flow">
              <ArrowUp aria-hidden="true" size={14} />
              <span>REST · Webhooks · Events · SDKs</span>
            </div>
            <div className="layer core-layer">
              <b>CoreLink Capability Layer</b>
              <span>Identity · Alpha</span>
              <span>Device Registry · Alpha</span>
              <span>Digital Twin · Experimental</span>
              <span>Telemetry · Experimental</span>
              <span>Commands · Alpha</span>
              <span>Media · Planned</span>
            </div>
            <div className="flow">
              <ArrowUp aria-hidden="true" size={14} />
              <span>Protocol adapters & connectors</span>
            </div>
            <div className="layer devices">
              <b>Connected World</b>
              <span>Vehicle</span>
              <span>Pet Tracker</span>
              <span>Camera</span>
              <span>Sensor</span>
              <span>Business Systems</span>
            </div>
          </div>
        </div>
      </section>

      <section className="developers section shell" id="developers">
        <div className="dev-copy">
          <div className="section-label">
            مسیر توسعه‌دهنده <span>05</span>
          </div>
          <h2>یک قرارداد روشن، از اتصال آزمایشی تا محصول واقعی.</h2>
          <p>
            قراردادهای قابل خواندن توسط ماشین نقطه شروع‌اند. SDKها، CLI، Mock
            Server و MCP Server به‌تدریج روی همین قراردادها منتشر می‌شوند.
            نمونه روبه‌رو پیش‌نمایش طراحی SDK است و هنوز بسته رسمی قابل نصب نیست.
          </p>
          <div className="dev-links">
            <a
              href="https://github.com/CoreLinkPlatform/api-contracts"
              target="_blank"
              rel="noreferrer"
            >
              مشاهده API Contracts <ExternalLink aria-hidden="true" size={13} />
            </a>
            <a
              href="https://github.com/CoreLinkPlatform"
              target="_blank"
              rel="noreferrer"
            >
              همه‌ی مخزن‌ها <ExternalLink aria-hidden="true" size={13} />
            </a>
          </div>
        </div>
        <DeveloperCodeSamples />
      </section>

      <section className="open-source shell section" id="resources">
        <div className="section-heading">
          <div>
            <div className="section-label">
              منابع فنی عمومی <span>06</span>
            </div>
            <h2>هسته خصوصی؛ قراردادها و ابزارهای ادغام عمومی.</h2>
          </div>
          <p>
            مخزن‌های عمومی محل انتشار تدریجی قراردادها، مستندات و ابزارهای
            ادغام‌اند. وضعیت واقعی هر مورد با واژگان maturity مشترک (Scaffold، Experimental،
            Alpha، Beta، Stable، Deprecated و Planned) در همان مخزن و evidence اجرایی سنجیده می‌شود.
          </p>
        </div>
        <div className="repo-grid">
          {repos.map((item) => (
            <a
              key={item.repo}
              href={`https://github.com/CoreLinkPlatform/${item.repo}`}
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <span className="repo-icon">
                  <Code2 aria-hidden="true" size={17} />
                </span>
                <b>{item.name}</b>
              </div>
              <span className="repo-status">{item.status}</span>
              <p>{item.desc}</p>
              <small>
                CoreLinkPlatform/{item.repo}{" "}
                <i>
                  <ExternalLink aria-hidden="true" size={13} />
                </i>
              </small>
            </a>
          ))}
        </div>
      </section>

      <section className="vision section" id="vision">
        <div className="shell vision-grid">
          <div>
            <div className="section-label">
              مسیر شروع همکاری <span>07</span>
            </div>
            <h2>پایلوت را کوچک شروع می‌کنیم؛ مسیر توسعه از ابتدا روشن می‌ماند.</h2>
            <p>
              برای شروع، به پروژه بزرگ و پرریسک نیاز نیست. یک سناریوی مشخص، یک
              یا چند مدل دستگاه و معیار موفقیت روشن انتخاب می‌کنیم و بعد از
              اعتبارسنجی فنی، دامنه را گسترش می‌دهیم.
            </p>
          </div>
          <ol className="vision-points">
            <li>
              <b>01</b>
              <h3>تعریف سناریو</h3>
              <p>دستگاه، داده موردنیاز، کاربر و معیار موفقیت پایلوت.</p>
            </li>
            <li>
              <b>02</b>
              <h3>اتصال نمونه</h3>
              <p>بررسی پروتکل، ساخت پروفایل دستگاه و دریافت داده واقعی.</p>
            </li>
            <li>
              <b>03</b>
              <h3>اعتبارسنجی عملیات</h3>
              <p>آزمون موقعیت، رویداد، هشدار و دسترسی کاربران در میدان.</p>
            </li>
            <li>
              <b>04</b>
              <h3>گسترش محصول</h3>
              <p>افزودن دستگاه‌ها، مستاجرها، برند و یکپارچه‌سازی‌های بعدی.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="cta-section shell" id="contact">
        <div className="cta-core">
          <BrandSymbol className="cta-symbol" />
        </div>
        <div>
          <small>CORELINK PLATFORM</small>
          <h2>سناریوی پایلوت شما را از نظر فنی بررسی کنیم.</h2>
          <p>
            مدل دستگاه، نوع داده و هدف کسب‌وکار را بفرستید. در گفت‌وگوی نخست،
            مسیر اتصال، ریسک‌های فنی و دامنه یک پایلوت قابل‌اندازه‌گیری را مشخص
            می‌کنیم.
          </p>
        </div>
        <div className="actions">
          <a
            className="button primary"
            href="https://www.linkedin.com/in/jaavid"
            target="_blank"
            rel="noreferrer"
          >
            شروع گفت‌وگوی پایلوت <ExternalLink aria-hidden="true" size={16} />
          </a>
          <a
            className="button secondary"
            href="https://github.com/CoreLinkPlatform"
            target="_blank"
            rel="noreferrer"
          >
            بررسی منابع فنی
          </a>
        </div>
      </section>

      <footer className="footer shell">
        <Logo />
        <p>زیرساخت اتصال و یکپارچه‌سازی محصولات هوشمند</p>
        <div>
          <a href="https://github.com/CoreLinkPlatform">GitHub</a>
          <a href="#developers">توسعه‌دهندگان</a>
          <a href="#top">
            بازگشت به بالا <ArrowUp aria-hidden="true" size={13} />
          </a>
        </div>
        <small>© 2026 CoreLink Platform</small>
      </footer>
    </main>
  );
}
