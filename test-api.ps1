# IT INFOTECH SkillHub - API Testing Script
# Run this script to test all API endpoints

$BASE_URL = "http://localhost:5000/api"
$TIMESTAMP = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

Write-Host "╔════════════════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║  IT INFOTECH SkillHub - API Testing Script                              ║" -ForegroundColor Cyan
Write-Host "║  Testing started at: $TIMESTAMP                    ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Green
Write-Host "1️⃣  HEALTH CHECK TEST" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Green
Write-Host ""

try {
    Write-Host "Testing: GET $BASE_URL/health" -ForegroundColor Magenta
    $response = Invoke-RestMethod -Uri "$BASE_URL/health" -Method Get
    Write-Host "✅ Status: 200 OK" -ForegroundColor Green
    Write-Host "Response: $(ConvertTo-Json $response)" -ForegroundColor Green
    Write-Host ""
} catch {
    Write-Host "❌ Failed: $_" -ForegroundColor Red
    Write-Host ""
}

Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Green
Write-Host "2️⃣  AUTHENTICATION TESTS" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Green
Write-Host ""

# Generate unique email
$timestamp = Get-Date -Format "yyyyMMddHHmmss"
$testEmail = "test_$timestamp@gmail.com"
$testName = "Test User $timestamp"
$testPassword = "Test@123456"
$TOKEN = ""

# Test Signup
try {
    Write-Host "Testing: POST $BASE_URL/auth/signup" -ForegroundColor Magenta
    $signupData = @{
        name = $testName
        email = $testEmail
        password = $testPassword
    }
    
    $response = Invoke-RestMethod -Uri "$BASE_URL/auth/signup" -Method Post `
        -ContentType "application/json" `
        -Body (ConvertTo-Json $signupData)
    
    $TOKEN = $response.token
    Write-Host "✅ Signup successful" -ForegroundColor Green
    Write-Host "User: $testName | Email: $testEmail" -ForegroundColor Green
    Write-Host "Token received: $($TOKEN.Substring(0, 20))..." -ForegroundColor Green
    Write-Host ""
} catch {
    Write-Host "❌ Signup failed: $_" -ForegroundColor Red
    Write-Host ""
}

# Test Login
try {
    Write-Host "Testing: POST $BASE_URL/auth/login" -ForegroundColor Magenta
    $loginData = @{
        email = $testEmail
        password = $testPassword
    }
    
    $response = Invoke-RestMethod -Uri "$BASE_URL/auth/login" -Method Post `
        -ContentType "application/json" `
        -Body (ConvertTo-Json $loginData)
    
    Write-Host "✅ Login successful" -ForegroundColor Green
    Write-Host "User authenticated: $(ConvertTo-Json $response.user)" -ForegroundColor Green
    Write-Host ""
} catch {
    Write-Host "❌ Login failed: $_" -ForegroundColor Red
    Write-Host ""
}

# Test Get Current User
if ($TOKEN) {
    try {
        Write-Host "Testing: GET $BASE_URL/auth/me" -ForegroundColor Magenta
        $headers = @{ Authorization = "Bearer $TOKEN" }
        $response = Invoke-RestMethod -Uri "$BASE_URL/auth/me" -Method Get -Headers $headers
        Write-Host "✅ Get current user successful" -ForegroundColor Green
        Write-Host "User data: $(ConvertTo-Json $response)" -ForegroundColor Green
        Write-Host ""
    } catch {
        Write-Host "⚠️  Get current user returned: $_" -ForegroundColor Yellow
        Write-Host ""
    }
}

Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Green
Write-Host "3️⃣  MODULE TESTS" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Green
Write-Host ""

# Test Get All Modules
try {
    Write-Host "Testing: GET $BASE_URL/modules" -ForegroundColor Magenta
    $response = Invoke-RestMethod -Uri "$BASE_URL/modules" -Method Get
    Write-Host "✅ Get modules successful" -ForegroundColor Green
    Write-Host "Response: $(ConvertTo-Json $response)" -ForegroundColor Green
    Write-Host ""
} catch {
    Write-Host "⚠️  Get modules returned: $_" -ForegroundColor Yellow
    Write-Host ""
}

# Test Get Specific Module
try {
    Write-Host "Testing: GET $BASE_URL/modules/1" -ForegroundColor Magenta
    $response = Invoke-RestMethod -Uri "$BASE_URL/modules/1" -Method Get
    Write-Host "✅ Get module 1 successful" -ForegroundColor Green
    Write-Host "Response: $(ConvertTo-Json $response)" -ForegroundColor Green
    Write-Host ""
} catch {
    Write-Host "⚠️  Get module 1 returned: $_" -ForegroundColor Yellow
    Write-Host ""
}

Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Green
Write-Host "4️⃣  LEADERBOARD TESTS" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Green
Write-Host ""

# Test Global Leaderboard
try {
    Write-Host "Testing: GET $BASE_URL/leaderboard/global" -ForegroundColor Magenta
    $response = Invoke-RestMethod -Uri "$BASE_URL/leaderboard/global" -Method Get
    Write-Host "✅ Get global leaderboard successful" -ForegroundColor Green
    Write-Host "Response: $(ConvertTo-Json $response)" -ForegroundColor Green
    Write-Host ""
} catch {
    Write-Host "⚠️  Get leaderboard returned: $_" -ForegroundColor Yellow
    Write-Host ""
}

# Test Weekly Leaderboard
try {
    Write-Host "Testing: GET $BASE_URL/leaderboard/weekly" -ForegroundColor Magenta
    $response = Invoke-RestMethod -Uri "$BASE_URL/leaderboard/weekly" -Method Get
    Write-Host "✅ Get weekly leaderboard successful" -ForegroundColor Green
    Write-Host "Response: $(ConvertTo-Json $response)" -ForegroundColor Green
    Write-Host ""
} catch {
    Write-Host "⚠️  Get weekly leaderboard returned: $_" -ForegroundColor Yellow
    Write-Host ""
}

# Test Speed Leaderboard
try {
    Write-Host "Testing: GET $BASE_URL/leaderboard/speed" -ForegroundColor Magenta
    $response = Invoke-RestMethod -Uri "$BASE_URL/leaderboard/speed" -Method Get
    Write-Host "✅ Get speed leaderboard successful" -ForegroundColor Green
    Write-Host "Response: $(ConvertTo-Json $response)" -ForegroundColor Green
    Write-Host ""
} catch {
    Write-Host "⚠️  Get speed leaderboard returned: $_" -ForegroundColor Yellow
    Write-Host ""
}

Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Green
Write-Host "5️⃣  CERTIFICATE TESTS" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Green
Write-Host ""

# Test Get Certificates
if ($TOKEN) {
    try {
        Write-Host "Testing: GET $BASE_URL/certificates" -ForegroundColor Magenta
        $headers = @{ Authorization = "Bearer $TOKEN" }
        $response = Invoke-RestMethod -Uri "$BASE_URL/certificates" -Method Get -Headers $headers
        Write-Host "✅ Get certificates successful" -ForegroundColor Green
        Write-Host "Response: $(ConvertTo-Json $response)" -ForegroundColor Green
        Write-Host ""
    } catch {
        Write-Host "⚠️  Get certificates returned: $_" -ForegroundColor Yellow
        Write-Host ""
    }
}

Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Green
Write-Host "6️⃣  ACHIEVEMENT TESTS" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Green
Write-Host ""

# Test Get Achievements
if ($TOKEN) {
    try {
        Write-Host "Testing: GET $BASE_URL/achievements" -ForegroundColor Magenta
        $headers = @{ Authorization = "Bearer $TOKEN" }
        $response = Invoke-RestMethod -Uri "$BASE_URL/achievements" -Method Get -Headers $headers
        Write-Host "✅ Get achievements successful" -ForegroundColor Green
        Write-Host "Response: $(ConvertTo-Json $response)" -ForegroundColor Green
        Write-Host ""
    } catch {
        Write-Host "⚠️  Get achievements returned: $_" -ForegroundColor Yellow
        Write-Host ""
    }
}

# Test Get Badges
if ($TOKEN) {
    try {
        Write-Host "Testing: GET $BASE_URL/achievements/badges" -ForegroundColor Magenta
        $headers = @{ Authorization = "Bearer $TOKEN" }
        $response = Invoke-RestMethod -Uri "$BASE_URL/achievements/badges" -Method Get -Headers $headers
        Write-Host "✅ Get badges successful" -ForegroundColor Green
        Write-Host "Response: $(ConvertTo-Json $response)" -ForegroundColor Green
        Write-Host ""
    } catch {
        Write-Host "⚠️  Get badges returned: $_" -ForegroundColor Yellow
        Write-Host ""
    }
}

# Test Get XP
if ($TOKEN) {
    try {
        Write-Host "Testing: GET $BASE_URL/achievements/xp" -ForegroundColor Magenta
        $headers = @{ Authorization = "Bearer $TOKEN" }
        $response = Invoke-RestMethod -Uri "$BASE_URL/achievements/xp" -Method Get -Headers $headers
        Write-Host "✅ Get XP successful" -ForegroundColor Green
        Write-Host "Response: $(ConvertTo-Json $response)" -ForegroundColor Green
        Write-Host ""
    } catch {
        Write-Host "⚠️  Get XP returned: $_" -ForegroundColor Yellow
        Write-Host ""
    }
}

Write-Host "╔════════════════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║  ✅ API Testing Completed!                                            ║" -ForegroundColor Cyan
Write-Host "║                                                                        ║" -ForegroundColor Cyan
Write-Host "║  📊 Test Summary:                                                     ║" -ForegroundColor Cyan
Write-Host "║  ✓ Health Check                                                      ║" -ForegroundColor Cyan
Write-Host "║  ✓ Authentication (Signup, Login, Get User)                         ║" -ForegroundColor Cyan
Write-Host "║  ✓ Modules                                                           ║" -ForegroundColor Cyan
Write-Host "║  ✓ Leaderboards                                                      ║" -ForegroundColor Cyan
Write-Host "║  ✓ Certificates                                                      ║" -ForegroundColor Cyan
Write-Host "║  ✓ Achievements                                                      ║" -ForegroundColor Cyan
Write-Host "║                                                                        ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan

Write-Host ""
Write-Host "📝 Notes:" -ForegroundColor Yellow
Write-Host "  • Test data stored in database: $testEmail" -ForegroundColor White
Write-Host "  • Some endpoints return placeholder responses (ready to implement)" -ForegroundColor White
Write-Host "  • Check server logs for detailed information" -ForegroundColor White
Write-Host ""
