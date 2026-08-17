"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[var(--color-gunmetal)] text-[var(--color-ivory)]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="border-b border-white/10 pb-12 mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            プライバシーポリシー
          </h1>
          <p className="text-sm text-[var(--color-ivory)]/50 tracking-widest uppercase">
            最終更新日: 2026年8月17日
          </p>
        </motion.div>
        
        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-[var(--color-copper)] prose-a:text-[var(--color-industrial-blue)]">
          <h2>1. 収集する情報</h2>
          <p>
            鋼和素材（以下、「当社」）は、当ウェブサイト（以下、「本サイト」）の利用に際して、お客様の氏名、メールアドレス、電話番号、会社名などの個人情報を収集する場合があります。これらの情報は、お問い合わせへの対応やサービスの向上を目的として収集されます。
          </p>

          <h2>2. 情報の利用目的</h2>
          <p>
            当社は、収集した情報を以下の目的で利用します。
          </p>
          <ul>
            <li>お問い合わせに対する回答および関連するサポートの提供。</li>
            <li>当社の製品やサービスに関する情報の提供。</li>
            <li>本サイトの利用状況の分析およびサービスの改善。</li>
          </ul>

          <h2>3. 情報の第三者への提供</h2>
          <p>
            当社は、法令に基づく場合やお客様の同意がある場合を除き、お客様の個人情報を第三者に提供・開示することはありません。ただし、業務の一部を委託する場合において、必要最小限の範囲で情報を共有することがあります。その際も、厳重な情報管理を義務付けます。
          </p>

          <h2>4. セキュリティ</h2>
          <p>
            当社は、お客様の個人情報の漏洩、紛失、改ざんを防止するため、適切なセキュリティ対策を講じています。ウェブサイト上のデータ通信は、SSL暗号化技術により保護されています。
          </p>

          <h2>5. クッキー（Cookie）について</h2>
          <p>
            本サイトでは、利用者の利便性向上やトラフィック分析のためにクッキーを使用しています。お使いのブラウザの設定により、クッキーの受け入れを拒否することも可能です。
          </p>

          <h2>6. 本ポリシーの変更</h2>
          <p>
            当社は、法令の改正や事業内容の変更に伴い、本プライバシーポリシーを事前の通知なく改定することがあります。変更後のポリシーは、本サイトに掲載された時点で効力を生じるものとします。
          </p>
          
          <hr className="border-white/10 my-12" />
          
          <p className="text-sm text-[var(--color-ivory)]/50">
            プライバシーポリシーに関するお問い合わせは、<a href="/contact">お問い合わせページ</a>よりご連絡ください。
          </p>
        </div>
      </div>
    </div>
  );
}
