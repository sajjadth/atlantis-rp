"use client";

import { Container, Stack, Typography } from "@mui/material";
import * as React from "react";

export default function Loading() {
  return (
    <Container component="main" dir="rtl" className="mb-6 py-6" fixed>
      {/* Stack to organize sections vertically */}
      <Stack className="w-full min-h-screen" alignItems="start" justifyContent="start" gap={6}>
        {/* Title */}
        <Typography variant="h3" fontWeight={900}>
          قوانین سرور
        </Typography>

        {/* Section containing rules for Player Reports */}
        <Stack alignItems="start" justifyContent="start" gap={2}>
          <Typography variant="h5">گزارش پلیرها</Typography>
          <Typography variant="body1" className="pr-4">
            این موارد را می توان در تیکت ها گزارش داد. تیم آتلانتیس برای شناسایی افرادی که مظنون به
            نقض یک دستورالعمل یا قانون هستند، نیاز به ID فرد داخل بازی دارد. این تیم همچنین به طور
            فعال قوانین را بدون هیچگونه ریپورت اجرا خواهد کرد. برای اینکه به ID بازیکنان دست یابید
            میتوانید با فشار دادن Home و برای ریپورت دادن داخل بازی تایپ کردن /Report یک پیام کوتاه
            در مورد مشکلتان را با تیم آتلانتیس به اشتراک بگذارید.
          </Typography>
        </Stack>

        {/* Section containing rules for General Rules */}
        <Stack alignItems="start" justifyContent="start" gap={2}>
          <Typography variant="h5">قوانین عمومی</Typography>
          <ul className="list-disc list-outside pr-4">
            <li>حداقل سن مورد نیاز برای ورود به سرور 17 سال میباشد.</li>
            <li>برای نقش آفرینی معقول در سرور آتلانتیس به یک میکروفون با کیفیت نیاز است.</li>
            <li>شخصیت شما باید نامی واقعی و قابل قبول داشته باشد.</li>
            <li>
              استفاده از شخصیت ها، گنگ ها و سناریو های گذشته یا جاری NoPixel قابل قبول نیست ولی
              الهام گرفتن از آنها موردی ندارد.
            </li>
            <li>
              تاکسیک بودن، چه داخل بازی و چه در داخل پلتفرم های دیگر (Twitch, Reddit, Discord,...)
              می‌تواند باعث حذف شما در هر مقطع زمانی از کامیونیتی آتلانتیس شود.
            </li>
            <li>
              جدیت نقش آفرینی و اجرا قوانین در تمامی ساعات روز پابرجاست (نباید از جدیت و پیروی از
              قوانین شما در ساعات نیمه شب کاسته شود).
            </li>
            <li>
              بعد و قبل از ریست سرور جدیت نقش آفرینی و پیروی از قوانین باید مانند ساعات دیگر باشد.
            </li>
            <li>
              یادآوری قوانین به صورت IC به هیچ وجه پذیرفته نیست (به طور مثال: مگه رم دادن زیر 160 تا
              نبود!).
            </li>
            <li>
              آزار و اذیت کلامی و تحمیل سناریوی مورد نظر شما به بقیه در صورت عدم رضایت فرد مقابل به
              هیچ وجه پذیرفته نیست.
            </li>
            <li>
              استفاده از الفاظ رکیک خارج عُرف، خصوصا در اماکن عمومی و در حضور افرادی که با آنها
              آشنایی کمتری دارید قابل قبول نیست.
            </li>
            <li>
              استفاده نامتعارف از اسکریپت ها (به گونه ای که توسط تیم توسعه سرور دیده نشده است) مصداق
              Bug Abuse است و برخورد جدی به همراه خواهد داشت. در صورت عدم اطمینان از نحوه درست
              کارکرد اسکریپت می توانید از تیم آتلانتیس راهنمایی بگیرید.
            </li>
          </ul>
        </Stack>

        {/* Section containing rules for Rules */}
        <Stack alignItems="start" justifyContent="start" gap={2}>
          <Typography variant="h5">قوانین</Typography>
          <ul className="list-disc list-outside pr-4">
            <li>
              همیشه باید در نقش شخصیتتان بمانید؛ در صورت وجود هرگونه مشکل، شما موظفید سناریو را
              ادامه دهید و از کاراکتر خود خارج نشوید، در صورت نیاز می‌توانید Report فرد مورد نظر را
              ارائه دهید. توجه کنید به هیچ عنوان از کاراکتر خود خارج نشوید و به فرد خاطی اطلاع دهید
              با کامند (/OOC) که در حال شکستن یک قانون در بازی است.
            </li>
            <li>
              در ساخت کارکتر خود توانایی های خود را نسبت به نقش آفرینی و پیش برد سناریو های کارکتر
              در نظر بگیرید.
            </li>
            <li> از انجام اقداماتی که دیگران را به شکستن قوانین ترغیب می‌کند خودداری کنید.</li>
            <li>
              استفاده از /OOC : OOC به صورت گلوبال است و برای اطلاع رسانی موارد خاص که روند آرپی را
              مختل می کند استفاده می شود.
            </li>
          </ul>
        </Stack>

        {/* Section containing rules for Combat Log */}
        <Stack alignItems="start" justifyContent="start" gap={2}>
          <Typography variant="h5">Combat Log</Typography>
          <ul className="list-disc list-outside pr-4">
            <li>
              خارج شدن عمدی از سرور در حین نقش آفرینی اکیدا ممنوع است. اگر مجبور به این کار شدید
              حتما با تیم آتلانتیس و افراد درگیر سناریو اطلاع دهید.
            </li>
            <li>
              به طور کلی وقتی می‌خواهید یک سناریو را آغاز یا دنبال کنید، باید پارامتر زمان را در نظر
              بگیرید.
            </li>
          </ul>
        </Stack>

        {/* Section containing rules for Meta Gaming */}
        <Stack alignItems="start" justifyContent="start" gap={2}>
          <Typography variant="h5">Meta Gaming</Typography>
          <ul className="list-disc list-outside pr-4">
            <li>
              استفاده یا انتقال عمدی اطلاعاتی که شخصیت شما در بازی نمی داند، شامل Twitch Chat و
              Discord Channels.
            </li>
          </ul>
        </Stack>

        {/* Section containing rules for Power gaming /Fail RP */}
        <Stack alignItems="start" justifyContent="start" gap={2}>
          <Typography variant="h5">Power gaming /Fail RP</Typography>
          <ul className="list-disc list-outside pr-4">
            <li> به طورکلی استفاده از امکانات خارج از عرف برای برتری گرفتن نسبت سایرین.</li>
            <li>صحبت کردن، Call Out دادن و ... در زمانی که کاراکتر شما زخمی شده است (Down).</li>
            <li> ترجیح دادن درآمدزایی به نقش آفرینی.</li>
            <li> اسکورت کردن افراد وقتی داخل ماشین هستید.</li>
            <li> رانندگی به صورت ممتد با سرعت زیاد بدون داشتن دلیل منطقی.</li>
            <li>تبعیت نکردن کارمندان دولت از قوانین راهنمایی و رانندگی.</li>
            <li>
              استفاده از Notes یا Create Scene باید به مقداری باشد که به اجرای بهتر سناریوی شما کمک
              کند.
            </li>
            <li>
              به صورت کلی /me زمانی استفاده می شود که انیمیشن یا اسکریپت سرور قابلیت اجرای ایده شما
              را ندارد. سرور /do ندارد. داخل /me سوال نپرسید.
            </li>
          </ul>
        </Stack>

        {/* Section containing rules for Vehicle Death Match (VDM) & Random Death Match (RDM) */}
        <Stack alignItems="start" justifyContent="start" gap={2}>
          <Typography variant="h5">Vehicle Death Match (VDM) & Random Death Match (RDM)</Typography>
          <ul className="list-disc list-outside pr-4">
            <li>حمله به شخص یا گروهی دیگر بدون داشتن هیچ گونه دلیل منطقی.</li>
            <li>
              حمله به یک شخص یا گروه دیگر با استفاده از وسیله نقلیه به قصد کشتن یا Down کردن آنها
              بدون داشتن دلیل.
            </li>
            <li> کوبیدن با سرعت بالای ۱۶۰ به دیگر ماشین‌ها (Ramming).</li>
          </ul>
        </Stack>

        {/* Section containing rules for New Life Rule (NLR) */}
        <Stack alignItems="start" justifyContent="start" gap={2}>
          <Typography variant="h5">New Life Rule (NLR)</Typography>
          <Typography variant="body1" className="pr-4">
            اگر کارکتر شما Down و مجدداً در بیمارستان Respawn شود، باید اتفاقاتی را که منجر به Down
            شدن شما در سناریوی فعلی شده است را فراموش کنید. اگر شما مطلع هستید که پلیس یا EMS در راه
            است، نمی‌توانیدRespawn کنید. شما حق شرکت در سناریویی که منجر به NLR شدن شما می‌شود را
            ندارید. شما باید تمام تلاش خود را در زمانی که Down هستید برای دریافت کمک های پزشکی
            بکنید.
          </Typography>
        </Stack>

        {/* Section containing rules for Multiple Characters (from the same player) in the same gang/group */}
        <Stack alignItems="start" justifyContent="start" gap={2}>
          <Typography variant="h5">
            Multiple Characters (from the same player) in the same gang/group
          </Typography>
          <Typography variant="body1" className="pr-4">
            این مسئله مجاز نیست. به طور کلی سعی کنید از ایجاد چندین شخصیت درگیر در یک داستان یا
            سناریوهای یکسان خودداری کنید چرا که نباید از اطلاعات یکسان برای پیشبرد اهداف خود استفاده
            کنید.
          </Typography>
        </Stack>

        {/* Section containing rules for Not Valuing Life (NVL) */}
        <Stack alignItems="start" justifyContent="start" gap={2}>
          <Typography variant="h5">Not Valuing Life (NVL)</Typography>
          <ul className="list-disc list-outside pr-4">
            <li>
              زمانی که با سلاح تهدید شده‌اید یا با خطر آسیب شدید مواجه هستید، تمام تلاش خود را برای
              جلوگیری از به خطر افتادن جان خود بکنید.
            </li>
            <li> تیراندازی عمدی در PD ، بیمارستان مجاز نیست.</li>
            <li>دشمنی با گنگ‌ها ، پلیس یا افراد مسلح بدون هیچ دلیل منطقی مجاز نیست.</li>
            <li>
              اشخاص نباید در تیراندازی یا درگیری بین دوگروه (پلیس/ شهروند) دخالت کنند. (Third Party)
            </li>
          </ul>
        </Stack>

        {/* Section containing rules for Criminal Activity */}
        <Stack alignItems="start" justifyContent="start" gap={2}>
          <Typography variant="h5">Criminal Activity</Typography>
          <ul className="list-disc list-outside pr-4">
            <li>
              کسانی که داخل رادیو هستند یا به هر نحوی به گروه خلافکار کمک میکنند به عنوان بخشی از
              سناریو به حساب می آیند.
            </li>
            <li>
              اولویت دادن مهارت های فردی (رانندگی، تیراندازی، ...) نسبت به شرایط نقش آفرینی قابل
              قبول نیست (تیم منتخب جهان نبندید).
            </li>
            <li>
              زمانی که شخصیت‌ها به بازداشت پلیس در بیایند، گروه دوم (شش نفر) تا شروع سناریو انتقال
              به زندان مرکزی اجازه دخالت ندارند. انجام این کار با اسلحه های سَبُک یا بدون
              برنامه‌ریزی دقیق نیز NVL است.
            </li>
            <li>
              شما مجاز به قاچاق وسایل به داخل زندان نیستید، مگر اینکه یک برنامه فرار از زندان داشته
              باشید.
            </li>
            <li> همه فعالیت های خلاف Rules of 3 هستند به جز: سرقت از بانک و ماشین حمل پول.</li>
          </ul>
        </Stack>

        {/* Section containing rules for Content Creator Rules */}
        <Stack alignItems="start" justifyContent="start" gap={2}>
          <Typography variant="h5">Content Creator Rules</Typography>
          <ul className="list-disc list-outside pr-4">
            <li>همه ی اشخاص باید مادام از قوانین Twitch.tv (TOS) پیروی کنند.</li>
            <li>
              هر استریمر نسبت به کامیونیتی خود مسئول است و درصورت بروز مشکل از سمت کامیونتی، مسئولیت
              آن به عهده استریمر می‌باشد. در نتیجه، از تاکسیک شدن فضای استریم خود جلوگیری نمایید.
            </li>
            <li>
              در صورت بروز هرگونه مشکلات فنی، وجود چیتر و ... از متشنج کردن جَو خودداری کنید. در
              صورت مشاهده برخورد خواهد شد.
            </li>
            <li>
              شناسایی و برخورد با استریم اسنایپ به عهده تیم آتلانتیس بوده و استریمر حق قضاوت و اظهار
              نظر در مورد شخص و سناریو را ندارد.
            </li>
            <li>
              هرگونه دخالت چت در روند نقش آفرینی (چالش دادن، یادآوری انجام کارهای فراموش شده،
              Backseat کردن و...) مصداق بارز Meta Gaming بوده و برخورد جدی به همراه خواهد داشت.
            </li>
          </ul>
        </Stack>
      </Stack>
    </Container>
  );
}
