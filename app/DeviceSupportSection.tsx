"use client";

import { useEffect, useRef, useState } from "react";
import { Activity, Bluetooth, Camera, CarFront, Cpu, Gauge, LockKeyhole, PawPrint, RadioTower, Router, Satellite, Smartphone, Video, Wifi } from "lucide-react";

const deviceGroups = [
  { label: "ردیاب خودرو", icon: CarFront },
  { label: "ردیاب شخصی", icon: Smartphone },
  { label: "ردیاب حیوانات", icon: PawPrint },
  { label: "دوربین خودرو", icon: Video },
  { label: "دوربین IP", icon: Camera },
  { label: "دانگل OBD", icon: Gauge },
  { label: "سنسور BLE", icon: Bluetooth },
  { label: "گیت‌وی صنعتی", icon: Router },
  { label: "قفل هوشمند", icon: LockKeyhole },
  { label: "سنسور تله‌متری", icon: Activity },
  { label: "ماژول GNSS", icon: Satellite },
  { label: "کنترلر IoT", icon: Cpu },
];

const protocols = [
  "MQTT", "MQTTS", "HTTP", "HTTPS", "WebSocket", "TCP", "UDP", "CoAP", "LwM2M",
  "Bluetooth LE", "LoRaWAN", "Zigbee", "Z-Wave", "Modbus TCP", "Modbus RTU",
  "CAN bus", "OBD-II", "J1939", "JT/T 808", "JT/T 1078", "NMEA 0183", "ONVIF",
  "RTSP", "SIP", "SNMP", "BACnet/IP", "KNX/IP", "OPC UA",
];

function Counter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || frame) return;
      const startedAt = performance.now();
      const duration = 1500;
      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.45 });
    observer.observe(node);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [target]);

  return (
    <div className="support-stat" ref={ref}>
      <strong dir="ltr">{value.toLocaleString("fa-IR")}{suffix}</strong>
      <span>{label}</span>
    </div>
  );
}

export default function DeviceSupportSection() {
  const repeatedDevices = [...deviceGroups, ...deviceGroups];
  const repeatedProtocols = [...protocols, ...protocols];

  return (
    <section className="device-support section" id="device-support">
      <div className="shell">
        <div className="device-support-head">
          <div>
            <div className="section-label">Device compatibility <span>03</span></div>
            <h2>یک زبان مشترک برای هزاران دستگاه متصل.</h2>
          </div>
          <p>لایه سازگاری CoreLink داده‌های ناهمگون دستگاه‌ها را به مدل‌های پایدار موقعیت، تله‌متری، رویداد، فرمان و رسانه تبدیل می‌کند. محصول شما با یک قرارداد واحد کار می‌کند، حتی وقتی سخت‌افزار و پروتکل تغییر می‌کند.</p>
        </div>

        <div className="support-stage">
          <div className="support-glow" />
          <div className="support-core">
            <RadioTower aria-hidden="true" />
            <span>DEVICE GATEWAY</span>
            <b>CoreLink</b>
          </div>
          <div className="support-stats" aria-label="آمار پوشش دستگاه و پروتکل">
            <Counter target={1} suffix="" label="کاتالوگ سازگاریِ نسخه‌دار" />
            <Counter target={3} suffix="" label="مرحلهٔ تأیید هر مدل" />
          </div>
          <div className="signal-ring ring-a" /><div className="signal-ring ring-b" /><div className="signal-ring ring-c" />
        </div>
      </div>

      <div className="compatibility-streams" aria-label="نمونه دستگاه‌ها و پروتکل‌های پشتیبانی‌شده">
        <div className="device-stream stream-forward">
          <div className="stream-track">
            {repeatedDevices.map(({ label, icon: Glyph }, index) => (
              <span key={`${label}-${index}`}><Glyph aria-hidden="true" />{label}</span>
            ))}
          </div>
        </div>
        <div className="protocol-stream stream-reverse" dir="ltr">
          <div className="stream-track">
            {repeatedProtocols.map((protocol, index) => <span key={`${protocol}-${index}`}>{protocol}</span>)}
          </div>
        </div>
        <div className="protocol-stream stream-forward slow" dir="ltr">
          <div className="stream-track">
            {[...repeatedProtocols].reverse().map((protocol, index) => <span key={`${protocol}-reverse-${index}`}>{protocol}</span>)}
          </div>
        </div>
      </div>

      <div className="shell support-foot">
        <Wifi aria-hidden="true" />
        <p>سازگاری هر مدل به نسخهٔ firmware، شیوهٔ انتقال داده و پیکربندی درگاه وابسته است. پیش از اتصال عملی، پروفایل دستگاه اعتبارسنجی می‌شود. <a href="/devices">مشاهدهٔ کاتالوگ و وضعیت سازگاری</a></p>
      </div>
    </section>
  );
}
