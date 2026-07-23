import Link from "next/link";

export const metadata = {
  title: "کاتالوگ سازگاری دستگاه‌ها | CoreLink",
  description: "راهنمای فارسی انتخاب، راه‌اندازی و اعتبارسنجی سازگاری دستگاه‌های موقعیت‌یاب و تله‌متری در CoreLink.",
};

const stages = [
  ["در انتظار بررسی", "مدل یا نسخهٔ firmware هنوز برای اتصال عملی بررسی نشده است."],
  ["آزمایشگاهی", "نمونهٔ دستگاه با تنظیمات مشخص به درگاه آزمایشی متصل و دادهٔ پایه بررسی شده است."],
  ["آمادهٔ بهره‌برداری", "تنظیمات، شناسهٔ دستگاه و سناریوهای کلیدی در محیط عملیاتی تأیید شده‌اند."],
];

const families = [
  "ردیاب خودرو و ناوگان", "ردیاب شخصی و حیوانات", "دستگاه‌های OBD و تله‌متری خودرو",
  "دوربین و ضبط‌کنندهٔ خودرو", "قفل، ردیاب دارایی و کانتینر", "تجهیزات ماهواره‌ای و دریایی",
  "گیت‌وی، حسگر و کنترلر صنعتی",
];

export default function DevicesPage() {
  return (
    <main className="shell" dir="rtl" style={{ paddingTop: 56, paddingBottom: 80 }}>
      <Link href="/" style={{ color: "var(--cyan)" }}>← بازگشت به صفحهٔ اصلی</Link>
      <header style={{ maxWidth: 860, marginTop: 42 }}>
        <div className="section-label">کاتالوگ سازگاری <span>DEVICE COMPATIBILITY</span></div>
        <h1 style={{ fontSize: "clamp(38px, 6vw, 70px)", lineHeight: 1.15, margin: "22px 0" }}>دستگاه مناسب را با اطمینان انتخاب کنید.</h1>
        <p style={{ color: "#93a8bc", fontSize: 18, lineHeight: 2 }}>این صفحه مرجع عمومیِ سازگاری دستگاه برای مشتریان و شرکای white-label است. نام مدل، نسخهٔ firmware و پروفایل ارسال داده را پیش از خرید یا استقرار با تیم CoreLink تطبیق دهید؛ یک نام مدل به‌تنهایی تضمین سازگاری نیست.</p>
      </header>

      <section style={{ marginTop: 56 }}>
        <h2>دامنهٔ کاتالوگ</h2>
        <p style={{ color: "#93a8bc", lineHeight: 2 }}>کاتالوگ، خانواده‌های زیر را پوشش می‌دهد. هر دستگاه بر اساس «پروفایل ارتباطی» ثبت می‌شود تا تغییر برند یا سخت‌افزار، قرارداد محصول شما را تغییر ندهد.</p>
        <ul style={{ columns: 2, gap: 32, lineHeight: 2.1, color: "#dce8f3" }}>
          {families.map((family) => <li key={family}>{family}</li>)}
        </ul>
      </section>

      <section style={{ marginTop: 56 }}>
        <h2>معنای وضعیت سازگاری</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginTop: 20 }}>
          {stages.map(([title, description], index) => (
            <article key={title} style={{ border: "1px solid var(--line)", borderRadius: 16, padding: 22, background: "rgba(13, 27, 43, .5)" }}>
              <small style={{ color: "var(--cyan)" }}>مرحلهٔ ۰{index + 1}</small>
              <h3 style={{ margin: "10px 0" }}>{title}</h3>
              <p style={{ color: "#93a8bc", lineHeight: 1.9, margin: 0 }}>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 56, maxWidth: 860 }}>
        <h2>آنچه برای اعلام پشتیبانی لازم است</h2>
        <ol style={{ color: "#dce8f3", lineHeight: 2.2, paddingInlineStart: 24 }}>
          <li>مدل دقیق، نسخهٔ firmware و شناسهٔ سخت‌افزار دستگاه را ارائه کنید.</li>
          <li>پروفایل ارتباطی و شیوهٔ انتقال داده را با محیط white-label خود تطبیق دهید.</li>
          <li>درگاه دریافت، احراز هویت، دادهٔ موقعیت و تله‌متری را با یک نمونهٔ واقعی آزمایش کنید.</li>
          <li>پس از تأیید، رکورد مدل در کاتالوگ tenant شما با وضعیت «آمادهٔ بهره‌برداری» ثبت می‌شود.</li>
        </ol>
      </section>

      <aside style={{ marginTop: 56, padding: 24, borderRight: "3px solid var(--cyan)", background: "rgba(0, 194, 255, .06)", lineHeight: 2 }}>
        <strong>شفافیت در اعلام سازگاری</strong>
        <p style={{ marginBottom: 0, color: "#c5d4e2" }}>فهرست یک موتور دریافت داده با فهرست «آمادهٔ بهره‌برداری» یکسان نیست. تنها مدل‌هایی که در محیط مربوط به شما و با پیکربندی درگاه فعال اعتبارسنجی شده‌اند، باید در پیشنهاد فروش یا پنل مشتری با این وضعیت نمایش داده شوند.</p>
      </aside>
    </main>
  );
}
