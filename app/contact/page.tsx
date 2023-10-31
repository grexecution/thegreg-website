export const metadata = {
  title: 'derGreg.com - Kontakt',
  description: 'Kontaktieren Sie mich!',
}

import PageIllustration from '@/components/page-illustration'

export default function Contact() {
  async function create(formData: FormData) {
    "use server";
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_KEY}`,
      },
      body: JSON.stringify({
        from: "noreply@dergreg.com",
        to: "greg.wallner@gmail.com",
        subject: "New Form Submission on dergreg.com",
        text: formData.get("firstName"),
      }),
    });
    console.log("Email sent!");
  }
  return (
    <>
      {/*  Page illustration */}
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <PageIllustration />
      </div>

      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-8 md:pb-16">
              <h1 className="h1 font-red-hat-display mb-1">Kontakt</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">Antwortzeit: ~ 6-12h</p>
            </div>

            {/* Contact form */}
            <form className="max-w-xl mx-auto" action={create}>
              <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-1/2 px-3 mb-4 md:mb-0">
                  <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="first-name">Vorname <span className="text-red-600">*</span></label>
                  <input id="first-name" type="text" name="firstName" className="form-input w-full" placeholder="Vorname" required />
                </div>
                <div className="w-1/2 px-3">
                  <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="last-name">Nachname <span className="text-red-600">*</span></label>
                  <input id="last-name" type="text" name="lastName" className="form-input w-full" placeholder="Nachname" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="phone">Telefon <span className="text-red-600">*</span></label>
                  <input id="phone" type="tel" className="form-input w-full" placeholder="Telefonnummer" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                  <input id="phone" type="email" className="form-input w-full" placeholder="Email-Adresse" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium" htmlFor="message">Nachricht</label>
                    <span className="text-sm text-gray-500">Optional</span>
                  </div>
                  <textarea id="message" rows={4} className="form-textarea w-full" placeholder="Möchten Sie Details hinzufügen?"></textarea>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                  <div className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-3">Wie soll ich dich kontaktieren?</div>
                  <div className="flex gap-6">
                    <label className="flex items-center mb-2">
                      <input type="radio" className="form-radio" name="role" />
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-3">Whatsapp</span>
                    </label>
                    <label className="flex items-center mb-2">
                      <input type="radio" className="form-radio" name="role" />
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-3">E-Mail</span>
                    </label>
                    <label className="flex items-center mb-2">
                      <input type="radio" className="form-radio" name="role" />
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-3">Telefonisch</span>
                    </label>
                  </div>

                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button type="submit" className="btn text-white bg-teal-500 hover:bg-teal-400 w-full flex items-center">
                    <span>Kontakt aufnehmen</span>
                    <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                    </svg>
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </section>
    </>
  )
}
