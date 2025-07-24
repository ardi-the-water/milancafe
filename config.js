// ═══════════════════════════════════════════════════════════════
// تنظیمات منوی دیجیتال کافه - فقط این بخش را تغییر دهید
// ═══════════════════════════════════════════════════════════════

const CAFE_CONFIG = {
    // ═══ اطلاعات کافه ═══
    pageTitle: "کافه میلان",
    name: "کارگاه تولید شیرینی، شکلات<br>و بستنی دست ساز",
   // welcomeMessage: "خوش آمدید!",
    logo: "assets/logo.png", // مسیر لوگو (اختیاری) - مثال: "assets/logo.png"
    
    // ═══ لینک گوگل شیت ═══
    // راهنما: از گوگل شیت خود، File > Share > Publish to web > CSV را انتخاب کنید
    googleSheetURL: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSSvEBn4PDs7A94WMUSzLeKz1TeWGT-z4J94WL_NUBdJ0e9BqWTBxX30jHSIxNuzwCeX0TjUcfyU_XQ/pub?output=csv',
    
    // ═══ رنگ‌بندی هوشمند ═══
    // با تغییر رنگ اصلی، رنگ هاور، اکتیو و متن به صورت خودکار تنظیم می‌شود.
    colors: {
        primary: "#020302f3",      // رنگ اصلی: هدر، فوتر و دکمه‌های فعال
        secondary: "#000000ff",    // رنگ ثانویه: قیمت‌ها و جزئیات مهم
        background: "#f8f9fa",   // پس‌زمینه کلی صفحه
        cardBackground: "rgba(255, 255, 255, 0.9)", // پس‌زمینه کارت‌های منو (برای افکت شیشه‌ای از rgba استفاده کنید)
        text: "#333333",         // رنگ متن اصلی
        lightText: "#7f8c8d"     // رنگ متن‌های فرعی (مانند توضیحات)
    },
    
    // ═══ تنظیمات نمایش ═══
    currency: "تومان",          // واحد پول
    showImages: true,           // نمایش تصاویر آیتم‌ها
    showDescription: true,      // نمایش توضیحات آیتم‌ها

    // ═══ شبکه‌های اجتماعی ═══
    socialMedia: {
        enabled: true, // نمایش دکمه اصلی شبکه‌های اجتماعی
        openInNewTab: true, // باز شدن لینک‌ها در تب جدید
        instagram: {
            enabled: true,
            url: "https://www.instagram.com/milancafe_kelarabad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" // لینک اینستاگرام خود را اینجا قرار دهید
        },
        telegram: {
            enabled: false,
            url: "https://t.me/your_channel" // لینک تلگرام خود را اینجا قرار دهید
        },
        whatsapp: {
            enabled: false,
            url: "https://wa.me/your_number" // لینک واتس‌اپ خود را اینجا قرار دهید
        }
    },

    // ═══ تنظیمات فونت ═══
    // برای استفاده از فونت محلی، فایل فونت را در پوشه assets/fonts قرار دهید
    // و نام خانواده و مسیر فایل را در اینجا مشخص کنید.
    font: {
        fontFamily: "Vazir-Medium-FD-WOL", // نام خانواده فونت که در CSS استفاده می‌شود
        fontFile: "assets/fonts/Vazir-Medium-FD-WOL.ttf" // مسیر فایل فونت
    },
    
    // ═══ اطلاعات توسعه‌دهنده ═══
    developer: {
        name: "علی خداکرمی",
        showCredit: true        // نمایش اعتبار توسعه‌دهنده در فوتر
    }
};

// ═══════════════════════════════════════════════════════════════
// توجه: فایل‌های دیگر را تغییر ندهید!
// ═══════════════════════════════════════════════════════════════
