Android APK build steps (summary):
1. npm install
2. npm run build
3. Ensure 'out' folder exists (next export) or use server approach and host endpoint.
4. npx cap init (if not already)
5. npx cap add android
6. npx cap copy android
7. Open android project in Android Studio and build signed APK/AAB
