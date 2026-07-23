import {
  ArrowLeft,
  ArrowUp,
  BellRing,
  CarFront,
  CloudCog,
  Code2,
  ExternalLink,
  GitBranch,
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
    desc: "فضای انتشار OpenAPI، AsyncAPI، Schema و مجموعه‌های Postman",
    status: "در حال تدوین",
  },
  {
    name: "Python SDK",
    repo: "sdk-python",
    desc: "SDK برنامه‌ریزی‌شده برای سرویس‌ها و اتوماسیون Python",
    status: "برنامه‌ریزی‌شده",
  },
  {
    name: "Java SDK",
    repo: "sdk-java",
    desc: "SDK برنامه‌ریزی‌شده برای Java و سامانه‌های سازمانی",
    status: "برنامه‌ریزی‌شده",
  },
  {
    name: "CoreLink CLI",
    repo: "cli",
    desc: "ابزار خط فرمان برنامه‌ریزی‌شده برای توسعه و عملیات",
    status: "برنامه‌ریزی‌شده",
  },
  {
    name: "MCP Server",
    repo: "mcp-server",
    desc: "مسیر پیشنهادی اتصال عامل‌های هوشمند به قابلیت‌های CoreLink",
    status: "برنامه‌ریزی‌شده",
  },
  {
    name: "Mock Server",
    repo: "mock-server",
    desc: "شبیه‌ساز برنامه‌ریزی‌شده برای توسعه و تست مستقل",
    status: "برنامه‌ریزی‌شده",
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
    <div className="pet-map" aria-label="نقشه محدوده امن حیوانات">
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
          <PawPrint aria-hidden="true" size={17} />
        </span>
        <b>لیام</b>
        <small>داخل محدوده</small>
      </div>
      <div className="pet-marker ninoosh-marker">
        <span>
          <PawPrint aria-hidden="true" size={17} />
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
          href="https://github.com/CoreLinkPlatform"
          target="_blank"
          rel="noreferrer"
        >
          <GitBranch aria-hidden="true" size={17} strokeWidth={1.8} /> GitHub{" "}
          <ExternalLink aria-hidden="true" size={13} />
        </a>
      </header>
      <div className="section-nav-wrap">
        <nav
          className="section-nav shell"
          aria-label="دسترسی سریع به بخش‌های صفحه"
        >
          <a href="#top">
            <span>00</span>معرفی
          </a>
          <a href="#platform">
            <span>01</span>مسئله
          </a>
          <a href="#solutions">
            <span>02</span>راهکارها
          </a>
          <a href="#device-support">
            <span>03</span>دستگاه‌ها
          </a>
          <a href="#architecture">
            <span>04</span>معماری
          </a>
          <a href="#developers">
            <span>05</span>توسعه‌دهندگان
          </a>
          <a href="#resources">
            <span>06</span>منابع عمومی
          </a>
          <a href="#vision">
            <span>07</span>مسیر رشد
          </a>
        </nav>
      </div>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow">
            <span /> Connected Product Infrastructure
          </div>
          <h1>
            هسته‌ی اتصال و یکپارچه‌سازی <em>محصولات هوشمند</em>
          </h1>
          <p>
            CoreLink یک پلتفرم در حال توسعه برای اتصال دستگاه‌ها، یکپارچه‌سازی
            داده و ساخت محصولات White-label است؛ با تمرکز نخست بر خودرو و ناوگان
            و مسیر توسعه برای ردیاب حیوانات و دیگر محصولات IoT.
          </p>
          <div className="actions">
            <a className="button primary" href="#developers">
              شروع برای توسعه‌دهندگان <ArrowLeft aria-hidden="true" size={18} />
            </a>
            <a className="button secondary" href="#platform">
              معرفی پلتفرم
            </a>
          </div>
          <div className="hero-note">
            <span className="pulse" /> API-first · Multi-tenant ·
            Deployment-flexible
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

      <div className="trust shell">
        <div>
          <Icon name="code" />
          <span>
            <b>API-first</b>
            <small>طراحی قراردادمحور</small>
          </span>
        </div>
        <div>
          <Icon name="layers" />
          <span>
            <b>Multi-tenant</b>
            <small>معماری چندمستاجری</small>
          </span>
        </div>
        <div>
          <Icon name="shield" />
          <span>
            <b>White-label</b>
            <small>برند و تجربه مستقل</small>
          </span>
        </div>
        <div>
          <Icon name="cloud" />
          <span>
            <b>Flexible deployment</b>
            <small>مسیر SaaS و استقرار اختصاصی</small>
          </span>
        </div>
      </div>

      <section className="problem shell section" id="platform">
        <div className="section-label">
          مسئله‌ای که حل می‌کنیم <span>01</span>
        </div>
        <div className="problem-grid">
          <div>
            <h2>هر محصول هوشمند نباید از صفر یک پلتفرم بسازد.</h2>
            <p>
              پروتکل دستگاه، احراز هویت، نقشه، اعلان، استریم، اپلیکیشن و پنل
              عملیات معمولاً به جزیره‌های جدا تبدیل می‌شوند. نتیجه: زمان عرضه‌ی
              طولانی، هزینه‌ی نگهداری بالا و قفل‌شدن کسب‌وکار به یک تأمین‌کننده.
            </p>
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
              محصولات متصل، یک هسته <span>02</span>
            </div>
            <h2>یک پلتفرم؛ چند مسیر بازار</h2>
          </div>
          <p>
            هدف CoreLink جداکردن قابلیت‌های مشترک زیرساخت از تجربه‌ی هر بازار
            است؛ تا هر محصول بتواند برند، قواعد و مدل کسب‌وکار خودش را داشته
            باشد.
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
            <h3>خودرو و ناوگان متصل</h3>
            <p>
              مسیر نخست محصول برای دریافت موقعیت، تله‌متری و رویداد، مدیریت
              دستگاه و ساخت پنل عملیات؛ با لایه‌های تطبیق برای کاهش وابستگی به
              یک پروتکل مشخص.
            </p>
            <ul>
              <li>ردیابی و Geofence</li>
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
              <small>B2B2C</small>
            </div>
            <h3>محصول و اپلیکیشن White-label</h3>
            <p>
              مدل B2B2C برای ارائه‌ی محصول با برند، دامنه و تجربه‌ی هر شریک؛ روی
              هسته‌ای مشترک با مرزبندی مستاجرها، نقش‌ها و داده‌ها.
            </p>
            <ul>
              <li>برند و تجربه اختصاصی</li>
              <li>Tenant مستقل</li>
              <li>نقش و دسترسی</li>
              <li>SaaS یا استقرار اختصاصی</li>
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
            <h3>ردیاب و خدمات حیوانات</h3>
            <p>
              مسیر محصولی در مرحله طراحی برای ردیاب حیوانات خانگی و شهری؛ شامل
              موقعیت، محدوده امن، پروفایل حیوان و سرویس‌های مشارکتی مبتنی بر
              مکان.
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
              <h2>پیاده‌سازی عوض می‌شود؛ قرارداد محصول ثابت می‌ماند.</h2>
            </div>
            <p>
              اصل معماری CoreLink این است که API عمومی، قابلیت محصول را توصیف
              کند نه نام ابزار داخلی را. با تثبیت و نسخه‌بندی قراردادها، اجزای
              زیرساخت می‌توانند با کمترین اثر بر یکپارچه‌سازی مشتری تکامل پیدا
              کنند.
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
              <span>Identity</span>
              <span>Device Registry</span>
              <span>Digital Twin</span>
              <span>Telemetry</span>
              <span>Commands</span>
              <span>Media</span>
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
            ساخته‌شده برای توسعه‌دهنده <span>05</span>
          </div>
          <h2>از اولین درخواست تا محصول واقعی، مسیر باید روشن باشد.</h2>
          <p>
            سطح توسعه‌دهندگان CoreLink در حال شکل‌گیری است: قراردادهای قابل
            خواندن توسط ماشین در اولویت‌اند و SDKها، CLI، Mock Server و MCP
            Server در نقشه راه عمومی قرار دارند. هنوز بسته‌ی رسمی قابل نصب منتشر
            نشده است.
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

      <section className="open-source shell" id="resources">
        <div className="section-heading">
          <div>
            <div className="section-label">
              Developer surface <span>06</span>
            </div>
            <h2>زیرساخت خصوصی؛ سطح توسعه‌ی عمومی و استاندارد.</h2>
          </div>
          <p>
            هسته‌ی تجاری خصوصی می‌ماند و مخزن‌های عمومی برای انتشار تدریجی
            قراردادها، مستندات و ابزارهای ادغام آماده شده‌اند. وضعیت هر مورد
            صریحاً در همان مخزن اعلام می‌شود.
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
              فرصت ساخت یک زیرساخت پایه <span>07</span>
            </div>
            <h2>
              بازار به یک اپلیکیشن دیگر نیاز ندارد؛ به لایه‌ای برای ساخت ده‌ها
              محصول نیاز دارد.
            </h2>
            <p>
              CoreLink از تجربه‌ی عملی اتصال سخت‌افزارها و سامانه‌های ناهمگون
              شکل گرفته است. فرضیه‌ی محصول این است که بخش بزرگی از این پیچیدگی
              میان بازارهای مختلف مشترک است و می‌تواند به یک زیرساخت B2B2C قابل
              تکرار تبدیل شود.
            </p>
          </div>
          <div className="vision-points">
            <article>
              <b>01</b>
              <h3>مسئله‌ی شناخته‌شده</h3>
              <p>پیچیدگی اتصال، چندپروتکلی و White-label در پروژه‌های واقعی.</p>
            </article>
            <article>
              <b>02</b>
              <h3>هسته‌ی قابل تکرار</h3>
              <p>
                معماری چندمستاجری و قراردادهای API با امکان استفاده در چند صنعت.
              </p>
            </article>
            <article>
              <b>03</b>
              <h3>مسیر ورود متمرکز</h3>
              <p>
                شروع از خودرو و ناوگان؛ اعتبارسنجی مسیر ردیاب حیوانات در گام
                بعد.
              </p>
            </article>
            <article>
              <b>04</b>
              <h3>نیاز روشن به شتاب‌دهی</h3>
              <p>
                تبدیل زیرساخت فنی به محصول، اجرای پایلوت و ساخت کانال فروش B2B.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-section shell" id="contact">
        <div className="cta-core">
          <BrandSymbol className="cta-symbol" />
        </div>
        <div>
          <small>CORELINK PLATFORM</small>
          <h2>محصول هوشمند بعدی را روی یک زیرساخت مشترک بسازیم.</h2>
          <p>
            برای همکاری فنی، اجرای پایلوت، سرمایه‌گذاری یا ساخت یک راهکار
            White-label با ما در ارتباط باشید.
          </p>
        </div>
        <div className="actions">
          <a
            className="button primary"
            href="https://www.linkedin.com/in/jaavid"
            target="_blank"
            rel="noreferrer"
          >
            گفت‌وگو درباره همکاری <ExternalLink aria-hidden="true" size={16} />
          </a>
          <a
            className="button secondary"
            href="https://github.com/CoreLinkPlatform"
            target="_blank"
            rel="noreferrer"
          >
            مشاهده GitHub
          </a>
        </div>
      </section>

      <footer className="footer shell">
        <Logo />
        <p>زیرساخت اتصال و یکپارچه‌سازی محصولات هوشمند</p>
        <div>
          <a href="https://github.com/CoreLinkPlatform">GitHub</a>
          <a href="#developers">Developers</a>
          <a href="#top">
            بازگشت به بالا <ArrowUp aria-hidden="true" size={13} />
          </a>
        </div>
        <small>© 2026 CoreLink Platform</small>
      </footer>
    </main>
  );
}
