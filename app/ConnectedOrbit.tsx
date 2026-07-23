"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Bluetooth, Camera, CarFront, CloudCog, Code2, Cpu, Gauge, Layers3, PawPrint, RadioTower, Router, Satellite, Video, Wifi, type LucideIcon } from "lucide-react";

type OrbitItem = {
  label: string;
  meta: string;
  icon: LucideIcon;
};

const orbitItems: OrbitItem[] = [
  { label: "Vehicle Tracker", meta: "GPS · TCP", icon: CarFront },
  { label: "Pet Tracker", meta: "GNSS · BLE", icon: PawPrint },
  { label: "Dashcam", meta: "Video · JT/T 1078", icon: Video },
  { label: "OBD Dongle", meta: "OBD-II · CAN", icon: Gauge },
  { label: "IP Camera", meta: "ONVIF · RTSP", icon: Camera },
  { label: "IoT Gateway", meta: "MQTT · HTTPS", icon: Router },
  { label: "BLE Sensor", meta: "Bluetooth LE", icon: Bluetooth },
  { label: "GNSS Module", meta: "NMEA 0183", icon: Satellite },
  { label: "Industrial IO", meta: "Modbus · OPC UA", icon: Cpu },
  { label: "Cloud Service", meta: "Events · Webhooks", icon: CloudCog },
  { label: "White-label App", meta: "Tenant · Brand", icon: Layers3 },
  { label: "SDK & API", meta: "Developer Surface", icon: Code2 },
  { label: "LoRa Gateway", meta: "LoRaWAN", icon: RadioTower },
  { label: "Edge Device", meta: "UDP · CoAP", icon: Wifi },
];

const slotStyles = [
  { angle: "-150deg", counterAngle: "150deg", radius: "265px", duration: "42s" },
  { angle: "-77deg", counterAngle: "77deg", radius: "215px", duration: "35s" },
  { angle: "-5deg", counterAngle: "5deg", radius: "270px", duration: "47s" },
  { angle: "68deg", counterAngle: "-68deg", radius: "230px", duration: "39s" },
  { angle: "142deg", counterAngle: "-142deg", radius: "275px", duration: "51s" },
];

export default function ConnectedOrbit() {
  const [visible, setVisible] = useState([0, 1, 2, 3, 4]);
  const cursor = useRef(0);
  const nextItem = useRef(5);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVisible((current) => {
        const next = [...current];
        next[cursor.current] = nextItem.current;
        return next;
      });
      cursor.current = (cursor.current + 1) % slotStyles.length;
      nextItem.current = (nextItem.current + 1) % orbitItems.length;
    }, 2400);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="orbital-system" aria-label="نمونه دستگاه‌ها، پروتکل‌ها و سرویس‌های متصل">
      <div className="orbit orbit-track-one" /><div className="orbit orbit-track-two" /><div className="orbit orbit-track-three" />
      {visible.map((itemIndex, slotIndex) => {
        const item = orbitItems[itemIndex];
        const Glyph = item.icon;
        const variables = {
          "--orbit-angle": slotStyles[slotIndex].angle,
          "--orbit-counter-angle": slotStyles[slotIndex].counterAngle,
          "--orbit-radius": slotStyles[slotIndex].radius,
          "--orbit-duration": slotStyles[slotIndex].duration,
        } as CSSProperties;

        return (
          <div className="orbit-anchor" style={variables} key={slotIndex}>
            <span className="orbit-link"><i /></span>
            <div className="orbit-node-shell">
              <div className="orbiting-item" key={item.label}>
                <span className="orbit-icon"><Glyph aria-hidden="true" /></span>
                <span className="orbit-copy"><b>{item.label}</b><small>{item.meta}</small></span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
