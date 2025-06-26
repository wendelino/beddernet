"use server";

export async function handleMessage(data: {
  message: string;
  first_name: string;
  last_name: string;
  dsgvo: boolean;
  email?: string | undefined;
  phone?: string | undefined;
}) {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      throw new Error(
        "Telegram Bot Token oder Chat ID fehlt in den Umgebungsvariablen"
      );
    }

    // Kontaktinformationen formatieren
    const contactInfo = [];
    if (data.email) {
      contactInfo.push(`📧 E-Mail: ${data.email}`);
    }
    if (data.phone) {
      contactInfo.push(`📞 Telefon: ${data.phone}`);
    }

    // Telegram-Nachricht formatieren
    const telegramMessage = `
🆕 *Neue Kontaktanfrage*

👤 *Name:* ${data.first_name} ${data.last_name}

${contactInfo.join("\n")}

💬 *Nachricht:*
${data.message}


📅 *Zeitstempel:* ${new Date().toLocaleString("de-DE")}
    `.trim();

    // Nachricht an Telegram senden
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Telegram API Fehler: ${errorData.description || "Unbekannter Fehler"}`
      );
    }

    return {
      success: true,
      message: "Nachricht erfolgreich gesendet!",
    };
  } catch (error) {
    console.error("Fehler beim Senden der Telegram-Nachricht:", error);

    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Ein unbekannter Fehler ist aufgetreten",
    };
  }
}
