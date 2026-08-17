"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", company: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[var(--color-ivory)] text-[var(--color-graphite)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            お問い合わせ
          </h1>
          <p className="text-xl text-[var(--color-graphite)]/70 font-light max-w-2xl leading-relaxed">
            製品、技術提携、またはカスタマイズについてのご相談は、こちらからご連絡ください。当社の専門チームが迅速に対応いたします。
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-12">
            <div>
               <h3 className="text-xl font-bold mb-6 border-b border-black/10 pb-4">本社</h3>
               <div className="flex items-start gap-4 mb-4">
                  <MapPin className="text-[var(--color-copper)] shrink-0 mt-1" />
                  <p className="leading-relaxed">
                    〒100-0005<br />
                    東京都千代田区丸の内1-1-1<br />
                    鋼和タワー 45F
                  </p>
               </div>
               <div className="flex items-center gap-4 mb-4">
                  <Phone className="text-[var(--color-copper)] shrink-0" />
                  <p>03-1234-5678</p>
               </div>
               <div className="flex items-center gap-4">
                  <Mail className="text-[var(--color-copper)] shrink-0" />
                  <p>contact@kowamaterials.jp</p>
               </div>
            </div>
            
            <div className="bg-[var(--color-gunmetal)] p-8 text-white rounded-xl shadow-2xl">
               <h3 className="text-xl font-bold mb-4 tracking-widest text-[var(--color-copper)]">グローバルサポート</h3>
               <p className="text-white/70 leading-relaxed text-sm mb-6">
                 海外からのお問い合わせについては、お住まいの地域の各支社またはグローバルデスクへご連絡ください。英語および中国語での対応も可能です。
               </p>
               <button className="text-sm font-bold border-b border-white/30 pb-1 hover:border-white transition-colors">
                 海外拠点一覧を見る
               </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-12 border border-black/5 rounded-xl shadow-xl">
               <h2 className="text-2xl font-bold mb-8">メッセージを送信</h2>
               
               {isSuccess ? (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center"
                 >
                   <h3 className="text-lg font-bold mb-2">送信完了</h3>
                   <p>お問い合わせいただきありがとうございます。担当者より近日中にご連絡申し上げます。</p>
                 </motion.div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-[var(--color-graphite)]/70">氏名 *</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full p-4 border border-black/10 rounded-lg focus:outline-none focus:border-[var(--color-copper)] focus:ring-1 focus:ring-[var(--color-copper)] transition-colors bg-[var(--color-ivory)]/50" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-[var(--color-graphite)]/70">メールアドレス *</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-4 border border-black/10 rounded-lg focus:outline-none focus:border-[var(--color-copper)] focus:ring-1 focus:ring-[var(--color-copper)] transition-colors bg-[var(--color-ivory)]/50" 
                        />
                      </div>
                   </div>
                   
                   <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-bold text-[var(--color-graphite)]/70">会社名</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full p-4 border border-black/10 rounded-lg focus:outline-none focus:border-[var(--color-copper)] focus:ring-1 focus:ring-[var(--color-copper)] transition-colors bg-[var(--color-ivory)]/50" 
                      />
                   </div>
                   
                   <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-[var(--color-graphite)]/70">お問い合わせ内容 *</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-4 border border-black/10 rounded-lg focus:outline-none focus:border-[var(--color-copper)] focus:ring-1 focus:ring-[var(--color-copper)] transition-colors bg-[var(--color-ivory)]/50 resize-none" 
                      ></textarea>
                   </div>
                   
                   <button 
                     type="submit" 
                     disabled={isSubmitting}
                     className="w-full md:w-auto px-12 py-4 bg-[var(--color-gunmetal)] text-white font-bold tracking-widest rounded-lg flex items-center justify-center gap-3 hover:bg-[var(--color-copper)] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                   >
                     {isSubmitting ? "送信中..." : (
                       <>
                         送信する
                         <Send size={18} />
                       </>
                     )}
                   </button>
                 </form>
               )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
