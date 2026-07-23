"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

type Language = "typescript" | "python" | "java";

const source = {
  typescript: `import { CoreLink } from "@corelink/sdk";

const client = new CoreLink({
  token: process.env.CORELINK_TOKEN!,
});

const device = await client.devices.create({
  externalId: "vehicle-1024",
  type: "vehicle_tracker",
  protocol: "mqtt",
});

await client.telemetry.publish(device.id, {
  location: { lat: 35.7219, lng: 51.3347 },
  speedKph: 42,
});`,
  python: `import os
from corelink import CoreLink

client = CoreLink(
    token=os.environ["CORELINK_TOKEN"]
)

device = client.devices.create(
    external_id="vehicle-1024",
    device_type="vehicle_tracker",
    protocol="mqtt",
)

client.telemetry.publish(device.id, {
    "location": {"lat": 35.7219, "lng": 51.3347},
    "speed_kph": 42,
})`,
  java: `CoreLink client = CoreLink.builder()
    .token(System.getenv("CORELINK_TOKEN"))
    .build();

Device device = client.devices().create(
    DeviceCreate.builder()
        .externalId("vehicle-1024")
        .type("vehicle_tracker")
        .protocol("mqtt")
        .build()
);

client.telemetry().publish(
    device.id(),
    Telemetry.builder()
        .location(35.7219, 51.3347)
        .speedKph(42)
        .build()
);`,
};

function TypeScriptCode() {
  return <code>
    <span className="syn-keyword">import</span> {"{ "}<span className="syn-type">CoreLink</span>{" }"} <span className="syn-keyword">from</span> <span className="syn-string">&quot;@corelink/sdk&quot;</span>;<br /><br />
    <span className="syn-keyword">const</span> client <span className="syn-operator">=</span> <span className="syn-keyword">new</span> <span className="syn-type">CoreLink</span><span className="syn-operator">{"({"}</span><br />
    {"  "}token: process.env.<span className="syn-property">CORELINK_TOKEN</span>!,<br />
    {"}"});<br /><br />
    <span className="syn-keyword">const</span> device <span className="syn-operator">=</span> <span className="syn-keyword">await</span> client.devices.<span className="syn-function">create</span><span className="syn-operator">{"({"}</span><br />
    {"  "}externalId: <span className="syn-string">&quot;vehicle-1024&quot;</span>,<br />
    {"  "}type: <span className="syn-string">&quot;vehicle_tracker&quot;</span>,<br />
    {"  "}protocol: <span className="syn-string">&quot;mqtt&quot;</span>,<br />
    {"}"});<br /><br />
    <span className="syn-keyword">await</span> client.telemetry.<span className="syn-function">publish</span><span className="syn-operator">{"(device.id, {"}</span><br />
    {"  "}location: {"{ "}lat: <span className="syn-number">35.7219</span>, lng: <span className="syn-number">51.3347</span>{" }"},<br />
    {"  "}speedKph: <span className="syn-number">42</span>,<br />
    {"}"});
  </code>;
}

function PythonCode() {
  return <code>
    <span className="syn-keyword">import</span> os<br />
    <span className="syn-keyword">from</span> corelink <span className="syn-keyword">import</span> <span className="syn-type">CoreLink</span><br /><br />
    client <span className="syn-operator">=</span> <span className="syn-type">CoreLink</span>(<br />
    {"    "}token<span className="syn-operator">=</span>os.environ[<span className="syn-string">&quot;CORELINK_TOKEN&quot;</span>]<br />
    )<br /><br />
    device <span className="syn-operator">=</span> client.devices.<span className="syn-function">create</span>(<br />
    {"    "}external_id<span className="syn-operator">=</span><span className="syn-string">&quot;vehicle-1024&quot;</span>,<br />
    {"    "}device_type<span className="syn-operator">=</span><span className="syn-string">&quot;vehicle_tracker&quot;</span>,<br />
    {"    "}protocol<span className="syn-operator">=</span><span className="syn-string">&quot;mqtt&quot;</span>,<br />
    )<br /><br />
    client.telemetry.<span className="syn-function">publish</span>(device.id, {"{"})<br />
    {"    "}<span className="syn-string">&quot;location&quot;</span>: {"{ "}<span className="syn-string">&quot;lat&quot;</span>: <span className="syn-number">35.7219</span>, <span className="syn-string">&quot;lng&quot;</span>: <span className="syn-number">51.3347</span>{" }"},<br />
    {"    "}<span className="syn-string">&quot;speed_kph&quot;</span>: <span className="syn-number">42</span>,<br />
    {"}"})
  </code>;
}

function JavaCode() {
  return <code>
    <span className="syn-type">CoreLink</span> client <span className="syn-operator">=</span> <span className="syn-type">CoreLink</span>.<span className="syn-function">builder</span>()<br />
    {"    "}.<span className="syn-function">token</span>(System.<span className="syn-function">getenv</span>(<span className="syn-string">&quot;CORELINK_TOKEN&quot;</span>))<br />
    {"    "}.<span className="syn-function">build</span>();<br /><br />
    <span className="syn-type">Device</span> device <span className="syn-operator">=</span> client.<span className="syn-function">devices</span>().<span className="syn-function">create</span>(<br />
    {"    "}<span className="syn-type">DeviceCreate</span>.<span className="syn-function">builder</span>()<br />
    {"        "}.<span className="syn-function">externalId</span>(<span className="syn-string">&quot;vehicle-1024&quot;</span>)<br />
    {"        "}.<span className="syn-function">type</span>(<span className="syn-string">&quot;vehicle_tracker&quot;</span>)<br />
    {"        "}.<span className="syn-function">protocol</span>(<span className="syn-string">&quot;mqtt&quot;</span>)<br />
    {"        "}.<span className="syn-function">build</span>()<br />
    );<br /><br />
    client.<span className="syn-function">telemetry</span>().<span className="syn-function">publish</span>(device.<span className="syn-function">id</span>(), <span className="syn-type">Telemetry</span>.<span className="syn-function">builder</span>()<br />
    {"    "}.<span className="syn-function">location</span>(<span className="syn-number">35.7219</span>, <span className="syn-number">51.3347</span>).<span className="syn-function">speedKph</span>(<span className="syn-number">42</span>).<span className="syn-function">build</span>()); 
  </code>;
}

const samples = {
  typescript: { label: "TypeScript", file: "register-device.ts", code: <TypeScriptCode /> },
  python: { label: "Python", file: "register_device.py", code: <PythonCode /> },
  java: { label: "Java", file: "RegisterDevice.java", code: <JavaCode /> },
};

export default function DeveloperCodeSamples() {
  const [language, setLanguage] = useState<Language>("typescript");
  const [copied, setCopied] = useState(false);
  const sample = samples[language];

  const copyCode = async () => {
    await navigator.clipboard.writeText(source[language]);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="code-playground" dir="ltr">
      <div className="code-tabs" role="tablist" aria-label="انتخاب زبان نمونه کد">
        <span className="window-controls" aria-hidden="true"><i /><i /><i /></span>
        <div>
          {(Object.keys(samples) as Language[]).map((key) => (
            <button key={key} type="button" role="tab" aria-selected={language === key} onClick={() => setLanguage(key)}>
              <span className={`language-dot ${key}`} />{samples[key].label}
            </button>
          ))}
        </div>
      </div>
      <div className="code-filebar">
        <span>{sample.file}</span>
        <button type="button" onClick={copyCode} aria-label="کپی نمونه کد">
          {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="code-sample" key={language}>{sample.code}</pre>
      <div className="code-result">
        <span><i /> 201 CREATED</span>
        <code>{"{ "}&quot;id&quot;: &quot;dev_01J9X2&quot;, &quot;status&quot;: &quot;online&quot;{" }"}</code>
        <small>SDK DESIGN PREVIEW</small>
      </div>
    </div>
  );
}
