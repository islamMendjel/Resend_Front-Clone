"use client";

import React, { useState } from "react";
import {
  Zap,
  Gem,
  Terminal,
  Coffee,
  Droplet,
  Mail,
  Copy,
  Check,
} from "lucide-react";

const frameworkIcons: Record<string, React.ReactNode> = {
  nodejs: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l10 5.8v11.4L12 25l-10-5.8V7.8L12 2zm0 2.3L4 8.9v8.2l8 4.6 8-4.6V8.9L12 4.3z" />
    </svg>
  ),
  nextjs: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 180 180" fill="none">
      <mask id="next-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#next-mask)">
        <circle cx="90" cy="90" r="90" fill="black" stroke="#fff" strokeWidth="6" />
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
        <rect x="115" y="54" width="12" height="72" fill="white" />
      </g>
    </svg>
  ),
  remix: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M2.5 4a1.5 1.5 0 0 1 1.5-1.5h11a6 6 0 0 1 4.24 10.24L21.5 21h-4l-2.8-6.5H6v6.5H2.5V4zm3.5 2v6.5h9a3.5 3.5 0 0 0 0-7H6z" />
    </svg>
  ),
  nuxt: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10.8 4.2a2 2 0 0 1 3.5 0l8.3 14.3a2 2 0 0 1-1.7 3H3.1a2 2 0 0 1-1.7-3L10.8 4.2zm6.2 14.8l-4.5-7.7-4.5 7.7h9z" />
    </svg>
  ),
  express: (
    <span className="font-mono text-[10px] font-bold text-[#a1a4a5]">ex</span>
  ),
  hono: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#e36002">
      <path d="M12 2C8 7 5 9.5 5 14a7 7 0 0 0 14 0c0-4.5-3-7-7-12zm0 16a3 3 0 0 1-3-3c0-2 1.5-3.5 3-5 1.5 1.5 3 3 3 5a3 3 0 0 1-3 3z" />
    </svg>
  ),
  redwood: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#bf4722">
      <path d="M12 2L4 16h5v6h6v-6h5L12 2z" />
    </svg>
  ),
  bun: (
    <span className="text-[12px] leading-none">🥟</span>
  ),
  astro: (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#ff5d01">
      <path d="M12 2.5a.75.75 0 0 1 .65.38l6.5 11.5a.75.75 0 0 1-.65 1.12h-3.2v4.25a.75.75 0 0 1-1.28.53L12 18.28l-2.02 2a.75.75 0 0 1-1.28-.53V15.5H5.5a.75.75 0 0 1-.65-1.12l6.5-11.5a.75.75 0 0 1 .65-.38z" />
    </svg>
  ),
};

interface SDKItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  code: string;
  filename: string;
  subTabs?: { id: string; name: string; code: string }[];
}

const sdkList: SDKItem[] = [
  {
    id: "nodejs",
    name: "Node.js",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.998 0L0 4.8v14.4L12 24l12-4.8V4.8L11.998 0zM12 2.25l9.6 3.84v11.52L12 21.45l-9.6-3.84V6.09L12 2.25zm-.7 5.25v6.23c0 1.73-.8 2.52-2.1 2.52-.68 0-1.22-.14-1.66-.46l.54-1.2c.28.2.56.3.88.3.56 0 .86-.3.86-1.16V7.5h1.48zm3.36 0c1.68 0 2.66.87 2.66 2.15 0 1.12-.66 1.83-1.68 2.09l2.02 3.26h-1.72l-1.78-3.02h-.68v3.02H13.9V7.5h2.76zm-.16 1.2h-1.12v2.12h1.12c.84 0 1.3-.42 1.3-1.06 0-.66-.46-1.06-1.3-1.06z" />
      </svg>
    ),
    filename: "index.ts",
    code: `import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'delivered@resend.dev',
    subject: 'Hello World',
    html: '<strong>it works!</strong>'
  });

  if (error) {
    return console.log(error);
  }

  console.log(data);
})();`,
    subTabs: [
      {
        id: "nodejs",
        name: "Node.js",
        code: `import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'delivered@resend.dev',
    subject: 'Hello World',
    html: '<strong>it works!</strong>'
  });

  if (error) {
    return console.log(error);
  }

  console.log(data);
})();`,
      },
      {
        id: "nextjs",
        name: "Next.js",
        code: `import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'delivered@resend.dev',
    subject: 'Hello World',
    html: '<strong>Hello from Next.js App Router!</strong>',
  });

  if (error) {
    return Response.json({ error }, { status: 500 });
  }

  return Response.json(data);
}`,
      },
      {
        id: "remix",
        name: "Remix",
        code: `import { Resend } from 'resend';
import type { ActionFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function action({ request }: ActionFunctionArgs) {
  const data = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'delivered@resend.dev',
    subject: 'Hello from Remix',
    html: '<p>Sent via Remix action</p>'
  });

  return json(data);
}`,
      },
      {
        id: "nuxt",
        name: "Nuxt",
        code: `import { Resend } from 'resend';

export default defineEventHandler(async (event) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'delivered@resend.dev',
    subject: 'Hello from Nuxt 3',
    html: '<p>Sent with Nuxt Server Engine</p>'
  });

  return { data, error };
});`,
      },
      {
        id: "express",
        name: "Express",
        code: `import express from 'express';
import { Resend } from 'resend';

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/send', async (req, res) => {
  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'delivered@resend.dev',
    subject: 'Hello from Express',
    html: '<strong>Sent via Express.js</strong>'
  });

  res.json({ data, error });
});`,
      },
      {
        id: "hono",
        name: "Hono",
        code: `import { Hono } from 'hono';
import { Resend } from 'resend';

const app = new Hono();

app.post('/email', async (c) => {
  const resend = new Resend(c.env.RESEND_API_KEY);
  const data = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'delivered@resend.dev',
    subject: 'Ultrafast Email with Hono',
    html: '<strong>Edge-ready email delivery</strong>'
  });
  return c.json(data);
});`,
      },
      {
        id: "redwood",
        name: "Redwood",
        code: `import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async () => {
  const { data } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'delivered@resend.dev',
    subject: 'Hello RedwoodJS',
    html: '<p>Sent from Redwood service</p>'
  });
  return { statusCode: 200, body: JSON.stringify(data) };
};`,
      },
      {
        id: "bun",
        name: "Bun",
        code: `import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const server = Bun.serve({
  async fetch() {
    const { data } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'delivered@resend.dev',
      subject: 'Fast emails with Bun',
      html: '<strong>Native Bun performance</strong>'
    });
    return Response.json(data);
  }
});`,
      },
      {
        id: "astro",
        name: "Astro",
        code: `---
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'delivered@resend.dev',
  subject: 'Hello from Astro',
  html: '<p>Content islands with email superpowers</p>'
});
---`,
      },
    ],
  },
  {
    id: "serverless",
    name: "Serverless",
    icon: <Zap className="w-5 h-5 text-white" />,
    filename: "worker.ts",
    code: `import { Resend } from 'resend';

export default {
  async fetch(request: Request, env: { RESEND_API_KEY: string }) {
    const resend = new Resend(env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'delivered@resend.dev',
      subject: 'Hello World',
      html: '<strong>it works on Edge!</strong>'
    });

    return Response.json({ data, error });
  }
};`,
  },
  {
    id: "ruby",
    name: "Ruby",
    icon: <Gem className="w-5 h-5 text-white" />,
    filename: "send.rb",
    code: `require 'resend'

Resend.api_key = 're_xxxxxxxxx'

params = {
  from: 'onboarding@resend.dev',
  to: 'delivered@resend.dev',
  subject: 'Hello World',
  html: '<strong>it works!</strong>'
}

email = Resend::Emails.send(params)
puts email`,
  },
  {
    id: "python",
    name: "Python",
    icon: (
      <svg
        className="w-5 h-5 text-white"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M11.9 1a5 5 0 0 0-4.9 5v1.9h5v.6H5A5 5 0 0 0 0 13.4a5 5 0 0 0 5 5h1.9v-2.5a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 0 2.5-2.5V6A5 5 0 0 0 12 1zm-1.8 1.6a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm1.9 20.4a5 5 0 0 0 4.9-5v-1.9h-5v-.6h7a5 5 0 0 0 5-4.9 5 5 0 0 0-5-5h-1.9v2.5a2.5 2.5 0 0 1-2.5 2.5h-5a2.5 2.5 0 0 0-2.5 2.5V18a5 5 0 0 0 5 5zm1.8-1.6a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
      </svg>
    ),
    filename: "main.py",
    code: `import resend

resend.api_key = "re_xxxxxxxxx"

params: resend.Emails.SendParams = {
    "from": "onboarding@resend.dev",
    "to": ["delivered@resend.dev"],
    "subject": "Hello World",
    "html": "<strong>it works!</strong>",
}

email = resend.Emails.send(params)
print(email)`,
  },
  {
    id: "php",
    name: "PHP",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 5.5C5.271 5.5 0 8.355 0 12s5.271 6.5 12 6.5c6.73 0 12-2.855 12-6.5S18.73 5.5 12 5.5zm-1.246 2h1.31l-.416 2h1.17c.736 0 1.24.123 1.553.44.318.32.393.843.246 1.56l-.498 2.5h-1.34l.47-2.34c.078-.39.05-.66-.082-.81-.13-.15-.403-.22-.82-.22h-1.02l-.6 3.37h-1.31l1.337-6.5zm-4.69 2h2.21c1.09 0 1.81.61 1.63 1.66-.22 1.28-1.12 1.97-2.36 1.97h-1.09l-.38 1.87H4.76l1.304-5.5zm8.38 0h2.21c1.09 0 1.81.61 1.63 1.66-.22 1.28-1.12 1.97-2.36 1.97h-1.09l-.38 1.87h-1.31l1.3-5.5zM7.37 10.78l-.33 1.59h.87c.58 0 1.04-.37 1.13-.91.08-.52-.2-.68-.79-.68h-.87zm8.38 0l-.33 1.59h.87c.58 0 1.04-.37 1.13-.91.08-.52-.2-.68-.79-.68h-.87z" />
      </svg>
    ),
    filename: "send.php",
    code: `<?php

require __DIR__ . '/vendor/autoload.php';

$resend = Resend::client('re_xxxxxxxxx');

$resend->emails->send([
  'from' => 'onboarding@resend.dev',
  'to' => 'delivered@resend.dev',
  'subject' => 'Hello World',
  'html' => '<strong>it works!</strong>',
]);`,
  },
  {
    id: "cli",
    name: "CLI",
    icon: <Terminal className="w-5 h-5 text-white" />,
    filename: "terminal.sh",
    code: `# Install the Resend CLI
npm install -g resend

# Send email directly from your shell
resend emails send \\
  --from "onboarding@resend.dev" \\
  --to "delivered@resend.dev" \\
  --subject "Hello World" \\
  --html "<strong>it works!</strong>"`,
  },
  {
    id: "go",
    name: "Go",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.789.514-1.193 1.273-1.18 2.22.012.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.199-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 0 1 .292-.187h4.253c-.023.316-.023.631-.07.947a5.009 5.009 0 0 1-1.064 2.476 4.86 4.86 0 0 1-2.453 1.647c-.807.222-1.577.199-2.302-.105a3.552 3.552 0 0 1-2.033-1.963c-.42-1.017-.386-2.045.058-3.038.479-1.075 1.274-1.835 2.348-2.301.876-.385 1.788-.432 2.711-.21.701.164 1.297.514 1.788 1.042.164.175.304.362.42.573.058.081.035.117-.07.152z" />
        <path d="M18.933 14.293a4.653 4.653 0 0 1-2.57-.853 3.574 3.574 0 0 1-1.507-2.313c-.35-1.459.152-2.711 1.053-3.82a5.008 5.008 0 0 1 3.456-1.928c1.297-.152 2.453.152 3.399 1.098.737.737 1.145 1.647 1.215 2.7.093 1.506-.467 2.758-1.506 3.796-.724.724-1.6 1.193-2.604 1.425-.304.058-.619.093-.936.093v-.198z" />
      </svg>
    ),
    filename: "main.go",
    code: `package main

import (
    "fmt"
    "github.com/resend/resend-go/v2"
)

func main() {
    client := resend.NewClient("re_xxxxxxxxx")

    params := &resend.SendEmailRequest{
        From:    "onboarding@resend.dev",
        To:      []string{"delivered@resend.dev"},
        Subject: "Hello World",
        Html:    "<strong>it works!</strong>",
    }

    sent, err := client.Emails.Send(params)
    if err != nil {
        panic(err)
    }
    fmt.Println(sent.Id)
}`,
  },
  {
    id: "rust",
    name: "Rust",
    icon: (
      <span className="font-mono font-bold text-sm text-white border border-white/60 rounded-full w-5 h-5 flex items-center justify-center text-[11px]">
        R
      </span>
    ),
    filename: "main.rs",
    code: `use resend_rs::types::CreateEmailBaseOptions;
use resend_rs::{Resend, Result};

#[tokio::main]
async fn main() -> Result<()> {
    let resend = Resend::new("re_xxxxxxxxx");

    let from = "onboarding@resend.dev";
    let to = ["delivered@resend.dev"];
    let subject = "Hello World";

    let email = CreateEmailBaseOptions::new(from, to, subject)
        .with_html("<strong>it works!</strong>");

    let response = resend.emails.send(email).await?;
    println!("{:?}", response);
    Ok(())
}`,
  },
  {
    id: "java",
    name: "Java",
    icon: <Coffee className="w-5 h-5 text-white" />,
    filename: "Main.java",
    code: `import com.resend.*;
import com.resend.services.emails.model.CreateEmailOptions;
import com.resend.services.emails.model.CreateEmailResponse;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_xxxxxxxxx");

        CreateEmailOptions params = CreateEmailOptions.builder()
            .from("onboarding@resend.dev")
            .to("delivered@resend.dev")
            .subject("Hello World")
            .html("<strong>it works!</strong>")
            .build();

        CreateEmailResponse data = resend.emails().send(params);
        System.out.println(data.getId());
    }
}`,
  },
  {
    id: "elixir",
    name: "Elixir",
    icon: <Droplet className="w-5 h-5 text-white" />,
    filename: "send.ex",
    code: `client = Resend.client(api_key: "re_xxxxxxxxx")

Resend.Emails.send(client, %{
  from: "onboarding@resend.dev",
  to: "delivered@resend.dev",
  subject: "Hello World",
  html: "<strong>it works!</strong>"
})`,
  },
  {
    id: "dotnet",
    name: ".NET",
    icon: (
      <span className="font-mono font-bold text-xs text-white">
        .NET
      </span>
    ),
    filename: "Program.cs",
    code: `using Resend;

var resend = new ResendClient("re_xxxxxxxxx");

var message = new EmailMessage();
message.From = "onboarding@resend.dev";
message.To.Add("delivered@resend.dev");
message.Subject = "Hello World";
message.HtmlBody = "<strong>it works!</strong>";

await resend.EmailSendAsync(message);`,
  },
  {
    id: "rest",
    name: "REST",
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 8l-4 4 4 4" /><path d="M17 8l4 4-4 4" />
      </svg>
    ),
    filename: "curl.sh",
    code: `curl -X POST 'https://api.resend.com/emails' \\
  -H 'Authorization: Bearer re_xxxxxxxxx' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "from": "onboarding@resend.dev",
    "to": ["delivered@resend.dev"],
    "subject": "Hello World",
    "html": "<strong>it works!</strong>"
  }'`,
  },
  {
    id: "smtp",
    name: "SMTP",
    icon: <Mail className="w-5 h-5 text-white" />,
    filename: "smtp.conf",
    code: `Host: smtp.resend.com
Port: 465 (SSL) or 587 (TLS)
Username: resend
Password: re_xxxxxxxxx
From: onboarding@resend.dev`,
  },
];

export default function IntegrateSection() {
  const [activeSdkId, setActiveSdkId] = useState("nodejs");
  const [activeSubTabId, setActiveSubTabId] = useState("nodejs");
  const [copied, setCopied] = useState(false);

  const activeSdk = sdkList.find((s) => s.id === activeSdkId) || sdkList[0];

  const currentCode =
    activeSdk.subTabs && activeSdk.subTabs.length > 0
      ? activeSdk.subTabs.find((st) => st.id === activeSubTabId)?.code ||
        activeSdk.code
      : activeSdk.code;

  const lines = currentCode.split("\n");

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="mx-auto px-6 py-16 sm:py-24 max-w-5xl md:max-w-7xl relative">
      {/* 3D Envelope icon loop */}
      <div className="flex justify-center mb-6">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-28 w-28 md:h-36 md:w-36 mix-blend-screen object-contain pointer-events-none select-none"
          poster="/media/3d-integrate-night-fallback.jpg"
        >
          <source src="/media/3d-integrate-night.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Heading */}
      <h2 className="font-display effect-font-styling text-[2.75rem] md:text-[3.5rem] tracking-tighter leading-[120%] mb-3 text-center text-white">
        Integrate{" "}
        <span className="bg-gradient-to-r from-[#ffca16] via-[#ffd60a] to-[#ff9592] bg-clip-text text-transparent">
          this morning
        </span>
      </h2>

      {/* Subtitle */}
      <p className="text-base md:text-[1.125rem] md:leading-[1.5] text-[#a1a4a5] font-normal text-balance mx-auto mb-14 max-w-3xl text-center">
        A simple, elegant interface so you can start sending emails in minutes.
        It fits right into your code with SDKs for your favorite programming
        languages.
      </p>

      {/* 13 SDK selector tabs bar */}
      <div className="mx-auto max-w-5xl mb-10 overflow-x-auto pb-4 no-scrollbar">
        <div className="flex items-center justify-start md:justify-center gap-3 sm:gap-4 min-w-max px-2">
          {sdkList.map((sdk) => {
            const isActive = sdk.id === activeSdkId;
            return (
              <button
                key={sdk.id}
                type="button"
                onClick={() => {
                  setActiveSdkId(sdk.id);
                  if (sdk.subTabs && sdk.subTabs.length > 0) {
                    setActiveSubTabId(sdk.subTabs[0].id);
                  }
                }}
                className="group flex flex-col items-center justify-center gap-3 outline-hidden cursor-pointer"
              >
                <div
                  className={`flex h-14 w-[3.75rem] items-center justify-center rounded-2xl border transition duration-200 ease-in-out ${
                    isActive
                      ? "border-white/80 bg-gradient-to-b from-white/10 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                      : "border-[#292d30] bg-black/40 hover:border-white/30"
                  }`}
                >
                  {sdk.icon}
                </div>
                <span
                  className={`text-xs sm:text-sm font-normal transition duration-200 ease-in-out ${
                    isActive
                      ? "text-white font-medium"
                      : "text-[#a1a4a5] group-hover:text-white"
                  }`}
                >
                  {sdk.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Code Terminal Window */}
      <div className="mx-auto max-w-4xl rounded-2xl border border-[#292d30] bg-[#000000] overflow-hidden shadow-2xl">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between border-b border-[#292d30] px-4 py-2.5 bg-[#0a0a0a]">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            {activeSdk.subTabs && activeSdk.subTabs.length > 0 ? (
              activeSdk.subTabs.map((sub) => {
                const isSubActive = sub.id === activeSubTabId;
                return (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => setActiveSubTabId(sub.id)}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs sm:text-sm transition duration-150 whitespace-nowrap cursor-pointer ${
                      isSubActive
                        ? "bg-white/10 text-white font-medium border border-white/20"
                        : "text-[#a1a4a5] hover:text-white"
                    }`}
                  >
                    {frameworkIcons[sub.id]}
                    <span>{sub.name}</span>
                  </button>
                );
              })
            ) : (
              <span className="font-mono text-xs text-[#a1a4a5] px-2 py-1">
                {activeSdk.filename}
              </span>
            )}
          </div>

          {/* Copy Button — icon only */}
          <button
            type="button"
            onClick={handleCopy}
            className="w-7 h-7 flex items-center justify-center rounded border border-[#292d30] text-[#a1a4a5] hover:text-white hover:border-white/30 transition duration-150 cursor-pointer ml-2 shrink-0"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-[#3ad389]" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Code Content with Line Numbers & Syntax Coloring */}
        <div className="p-4 sm:p-6 overflow-x-auto font-commit-mono text-[13px] sm:text-sm leading-6 selection:bg-[#9281f7]/30">
          <pre className="grid grid-cols-[auto_1fr] gap-x-4">
            <div className="select-none text-right text-[#464a4d] pr-2 border-r border-[#292d30]/60">
              {lines.map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            <div className="text-[#f0f0f0]">
              {lines.map((line, i) => {
                // Highlight emails with Iris Violet #9281f7
                if (line.includes("@resend.dev")) {
                  const parts = line.split(/('(?:[^']*)@resend\.dev'|"(?:[^"]*)@resend\.dev")/);
                  return (
                    <div key={i}>
                      {parts.map((p, idx) =>
                        p.includes("@resend.dev") ? (
                          <span key={idx} className="text-[#9281f7] font-medium">
                            {p}
                          </span>
                        ) : (
                          <span key={idx}>{p}</span>
                        )
                      )}
                    </div>
                  );
                }
                return <div key={i}>{line || " "}</div>;
              })}
            </div>
          </pre>
        </div>

        {/* Terminal Bottom Footer Bar */}
        <div className="border-t border-[#292d30] px-4 py-2.5 flex items-center gap-6 text-xs text-[#a1a4a5] bg-[#000000]">
          <a
            href="https://github.com/resend/resend-node-example"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              style={{ width: "16px", height: "16px" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M19 2.1q.8.2.9.8.4 1.5.1 3.2 0 .4.2.7.8 1.6.7 3.4c0 3-2 5-4.2 6q-1 .4-.9 1.4.2.8.1 1.6V21a1 1 0 0 1-2 0v-1.9q.1-1.6-.8-2.8a1 1 0 0 1 .8-1.6c2.6 0 5-1.8 5-4.5V10q0-1.5-.8-2.9l-.2-.8.2-.8c0-.7-.6-1-1-.6l-.5.3a1 1 0 0 1-.9.3Q12 5 8.1 5.6a1 1 0 0 1-1-.3l-.4-.5q-.8-.5-1 .6l.1 1q.1.5-.1.8a4 4 0 0 0-.8 3c0 2.7 2.4 4.5 5 4.5a1 1 0 0 1 .8 1.6 4 4 0 0 0-.8 2.9V21a1 1 0 0 1-2 0q-.1-.8-1-.8-1.6.3-2.8-.5a5 5 0 0 1-2-2.8 1 1 0 0 1 1.9-.7q.3 1.1 1.2 1.8.6.5 2.3-.1.5-.2.5-.7v-.1q.2-.6-.3-.8a6.4 6.4 0 0 1-4.8-6v-.4q0-1.5.7-3.1.2-.3.1-.7A8 8 0 0 1 4 2.9v-.2a1 1 0 0 1 1-.6q1.5 0 3 1.1.4.3.9.3 3-.4 6.3 0 .5 0 .8-.3 1.5-1 3-1z"
              />
            </svg>
            <span>View on GitHub</span>
          </a>
          <a
            href="https://github.com/resend/resend-node-example/archive/refs/heads/main.zip"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              style={{ width: "16px", height: "16px" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M5.294 10.707a1 1 0 1 1 1.414-1.414l1.731 1.731c.945.945 2.56.276 2.56-1.06V3a1 1 0 0 1 2 0v6.966c0 1.336 1.617 2.005 2.562 1.06l1.733-1.733a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-.153.125 1 1 0 0 1-.263.125l-.05.013a1 1 0 0 1-.667-.065 1 1 0 0 1-.292-.208zM6 21a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1"
              />
            </svg>
            <span>Download ZIP</span>
          </a>
        </div>
      </div>
    </section>
  );
}
