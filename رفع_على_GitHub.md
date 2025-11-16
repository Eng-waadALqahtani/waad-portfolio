# 📤 دليل رفع البورتفوليو على GitHub - خطوة بخطوة

## 🎯 الخطوات السريعة

### المتطلبات:
- ✅ حساب GitHub (إذا لم يكن لديك: https://github.com/signup)

---

## 📝 الخطوة 1: إنشاء Repository على GitHub

### 1. اذهب إلى GitHub
- افتح: **https://github.com**
- سجل دخول بحسابك

### 2. أنشئ Repository جديد
- اضغط على **"+"** في أعلى الصفحة
- اختر **"New repository"**

### 3. املأ المعلومات:
- **Repository name:** `waad-portfolio` (أو أي اسم تريده)
- **Description:** `Waad Alqahtani Portfolio - Data Analyst & AI Engineer`
- اختر **Public** (أو Private إذا أردت)
- **⚠️ مهم:** لا تختر "Initialize with README"
- **⚠️ مهم:** لا تختر "Add .gitignore"
- **⚠️ مهم:** لا تختر "Choose a license"
- اضغط **"Create repository"**

### 4. انسخ رابط Repository
ستظهر لك صفحة بها رابط مثل:
```
https://github.com/YOUR-USERNAME/waad-portfolio.git
```
**انسخ هذا الرابط - سنحتاجه لاحقاً!**

---

## 💻 الخطوة 2: رفع الكود من الكمبيوتر

### 1. افتح PowerShell في مجلد البورتفوليو

**الطريقة السريعة:**
- اضغط `Shift + Right Click` داخل مجلد البورتفوليو
- اختر **"Open PowerShell window here"**

أو افتح PowerShell واكتب:
```powershell
cd "C:\Users\Waad8\OneDrive\سطح المكتب\WAAD Project\waaad portfile"
```

### 2. تأكد من تثبيت Git
```powershell
git --version
```

إذا ظهرت رسالة خطأ:
- ثبت Git من: https://git-scm.com/download/win
- أعد فتح PowerShell

### 3. ابدأ Git (للمرة الأولى)
```powershell
git init
```

### 4. أضف كل الملفات
```powershell
git add .
```

### 5. احفظ التغييرات (Commit)
```powershell
git commit -m "Initial commit - Waad Portfolio"
```

**إذا ظهرت رسالة لتحديد الهوية (للمرة الأولى):**
```powershell
git config --global user.name "Waad Alqahtani"
git config --global user.email "your-email@example.com"
```

ثم أعد المحاولة:
```powershell
git commit -m "Initial commit - Waad Portfolio"
```

### 6. أضف رابط GitHub
```powershell
git remote add origin https://github.com/YOUR-USERNAME/waad-portfolio.git
```
**⚠️ مهم:** استبدل `YOUR-USERNAME` باسمك في GitHub!

### 7. حدد الفرع الرئيسي
```powershell
git branch -M main
```

### 8. ارفع الكود على GitHub
```powershell
git push -u origin main
```

### 9. أدخل بيانات GitHub
- **Username:** اسم المستخدم في GitHub
- **Password:** ستحتاج **Personal Access Token** (ليس كلمة المرور العادية)

---

## 🔑 إذا طُلب منك كلمة المرور

GitHub لم يعد يقبل كلمة المرور العادية. تحتاج **Personal Access Token**:

### إنشاء Personal Access Token:

1. اذهب إلى: **https://github.com/settings/tokens**
2. اضغط **"Generate new token"** → **"Generate new token (classic)"**
3. املأ المعلومات:
   - **Note:** `Portfolio Upload`
   - **Expiration:** اختر المدة (مثل 90 days)
   - **Scopes:** اختر **`repo`** (كل شيء)
4. اضغط **"Generate token"**
5. **انسخ الرمز الآن!** (لن تتمكن من رؤيته مرة أخرى)
6. استخدمه ككلمة المرور عند `git push`

---

## ✅ التحقق من النجاح

### بعد `git push`:
1. اذهب إلى صفحة Repository على GitHub
2. يجب أن ترى كل الملفات
3. ✅ نجحت!

---

## 📋 ملخص الأوامر (Copy & Paste)

```powershell
# 1. افتح PowerShell في مجلد البورتفوليو
cd "C:\Users\Waad8\OneDrive\سطح المكتب\WAAD Project\waaad portfile"

# 2. ابدأ Git
git init

# 3. أضف الملفات
git add .

# 4. احفظ التغييرات
git commit -m "Initial commit - Waad Portfolio"

# 5. أضف رابط GitHub (استبدل YOUR-USERNAME!)
git remote add origin https://github.com/YOUR-USERNAME/waad-portfolio.git

# 6. حدد الفرع
git branch -M main

# 7. ارفع الكود
git push -u origin main
```

---

## 🔄 للتحديثات المستقبلية

كل مرة تحدث شيئاً في البورتفوليو:

```powershell
git add .
git commit -m "Update portfolio"
git push
```

---

## 🆘 مشاكل شائعة

### المشكلة: "fatal: not a git repository"
**الحل:** تأكد أنك في المجلد الصحيح واجر `git init`

### المشكلة: "Authentication failed"
**الحل:** استخدم Personal Access Token بدلاً من كلمة المرور

### المشكلة: "remote origin already exists"
**الحل:** احذف الـ remote القديم:
```powershell
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/waad-portfolio.git
```

### المشكلة: "Please tell me who you are"
**الحل:** حدد الهوية:
```powershell
git config --global user.name "Waad Alqahtani"
git config --global user.email "your-email@example.com"
```

---

## 🎯 بعد الرفع

✅ الكود الآن على GitHub!  
✅ جاهز للنشر على Vercel أو Netlify  
✅ يمكنك مشاركة رابط Repository  

**الخطوة التالية:** راجع `النشر_السريع.md` لنشر الموقع!

---

## 📚 روابط مفيدة

- GitHub: https://github.com
- إنشاء حساب: https://github.com/signup
- Personal Access Token: https://github.com/settings/tokens
- تحميل Git: https://git-scm.com/download/win

---

**جاهز للرفع! 🚀**

