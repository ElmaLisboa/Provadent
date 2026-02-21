# Google Analytics 4 Setup Guide

## Overview
This landing page is configured with Google Analytics 4 (GA4) to track conversion events and measure ROI for Google Ads campaigns.

## Current Implementation

### 1. GA4 Script Integration
- **Location**: `client/index.html` (lines 17-24)
- **Script**: Google Analytics 4 gtag.js library
- **Placeholder**: Replace `G-XXXXXXXXXX` with your actual GA4 Measurement ID

### 2. Conversion Events Tracked
The following events are automatically tracked:

| Event Name | Trigger | Product | Data Sent |
|-----------|---------|---------|-----------|
| `purchase_click` | ProDentim button clicked | ProDentim | Product name, timestamp |
| `purchase_click` | ProvaDent button clicked | ProvaDent | Product name, timestamp |

### 3. Event Implementation
- **File**: `client/src/pages/HomeEN.tsx`
- **Function**: `trackConversion(eventName, product)`
- **Handlers**: `handleProdentimClick()`, `handleProvadentClick()`

## Setup Instructions

### Step 1: Create Google Analytics 4 Property
1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new GA4 property for your domain
3. Copy your Measurement ID (format: `G-XXXXXXXXXX`)

### Step 2: Update Measurement ID
Replace `G-XXXXXXXXXX` in two locations:
- `client/index.html` line 18: `src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"`
- `client/index.html` line 23: `gtag('config', 'G-XXXXXXXXXX');`

### Step 3: Configure Conversion Events in GA4
1. In Google Analytics, go to **Admin** → **Events**
2. Create custom event: `purchase_click`
3. Set parameter: `product` (string type)

### Step 4: Set Up Conversion Goals
1. Go to **Admin** → **Conversions**
2. Create new conversion event: `purchase_click`
3. This will track all button clicks to affiliate links

### Step 5: Link to Google Ads
1. In Google Ads, link your GA4 property
2. Import `purchase_click` as conversion action
3. Set conversion value based on expected commission

## Tracked Data Points

Each conversion event includes:
- **Product**: ProDentim or ProvaDent
- **Timestamp**: ISO 8601 format
- **User ID**: Automatically captured by GA4
- **Session ID**: Automatically captured by GA4
- **Device Info**: Automatically captured by GA4

## Viewing Reports

### In Google Analytics:
1. **Real-time**: Reports → Real-time
2. **Conversions**: Reports → Life cycle → Conversions
3. **Events**: Reports → Events

### In Google Ads:
1. Campaigns → Conversions column
2. Conversion tracking shows ROI per campaign

## Optimization Tips

1. **Attribution Modeling**: Use GA4's data-driven attribution to understand which touchpoints drive conversions
2. **Audience Segmentation**: Create audiences based on conversion behavior
3. **A/B Testing**: Test different headlines and CTAs, track conversion rates
4. **Remarketing**: Use GA4 audiences for remarketing to non-converters

## Troubleshooting

### Events not showing up?
1. Check Measurement ID is correct
2. Verify GA4 property is receiving data (Real-time report)
3. Wait 24-48 hours for data processing
4. Check browser console for JavaScript errors

### Conversion value not tracking?
1. Ensure custom event is created in GA4
2. Check event parameter names match exactly
3. Verify Google Ads conversion import settings

## Next Steps

1. **Add Page View Tracking**: Track which sections users view most
2. **Add Scroll Depth Tracking**: Measure engagement with page content
3. **Add Form Submission Tracking**: If you add email capture form
4. **Set Up Custom Dashboards**: Monitor KPIs in real-time
