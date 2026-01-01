# Build script to create extension.zip for the website
Write-Host "Building extension.zip..." -ForegroundColor Green

# Remove old zip if exists
if (Test-Path "web\public\extension.zip") {
    Remove-Item "web\public\extension.zip"
    Write-Host "Removed old extension.zip" -ForegroundColor Yellow
}

# Create zip from extension directory
Compress-Archive -Path "extension\*" -DestinationPath "web\public\extension.zip" -Force

Write-Host "Extension zip created successfully!" -ForegroundColor Green
Write-Host "Location: web\public\extension.zip" -ForegroundColor Cyan

