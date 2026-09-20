# AgriFlow Pro

You are a senior product designer and senior frontend engineer.

Build a polished, professional, modern Farm Management / Agricultural Operations Management web application POC.

I have attached an Excel file that the client currently uses to manage farm information. IMPORTANT: inspect the Excel carefully and use its actual fields, structure, and sample data when designing the Farm Detail page. Do not invent or remove important farm fields.

The final result must be a CLIENT-READY interactive prototype, not a generic admin dashboard.

==================================================

CORE APPLICATION

==================================================

The application allows an Admin to manage:

1. Regions

2. Farms

3. Farm Owners

4. Supervisors

5. Farm Activities / Timeline Logs

6. Detailed Farm Records

Relationships:

Region

  ↓

Farms

  ↓

Farm Owner

Farm

  ↓

Supervisor

  ↓

Activities / Updates

A Region contains multiple Farms.

A Farm belongs to one Region.

A Farm has one or more mapped Farm Owners as required by the data model.

A Supervisor is assigned to multiple Farms and can update information/activity logs for the farms they supervise.

Admin has complete access.

==================================================

DELIVERABLE

==================================================

Create a SINGLE self-contained HTML file.

Everything must be inside the HTML:

- HTML

- CSS

- JavaScript

- Dummy data

Do not require a backend.

The HTML must work directly when opened in Chrome/Edge.

All important interactions must actually work.

Do not create a static mockup.

Build a functional clickable POC.

==================================================

DESIGN DIRECTION

==================================================

The UI must look like a modern production SaaS application.

DO NOT make it look like:

- Bootstrap admin

- Old ERP software

- Basic CRUD dashboard

- Spreadsheet converted directly into HTML

- Generic template

Design inspiration:

- Linear

- Stripe Dashboard

- Notion

- Modern enterprise SaaS

- Modern agricultural technology platforms

Visual characteristics:

- Premium

- Clean

- Minimal

- Professional

- Modern

- Sleek

- Information-dense

- Easy for non-technical users

- Excellent typography

- Strong visual hierarchy

- Soft neutral backgrounds

- Subtle borders

- Subtle shadows

- Rounded cards

- Clean tables

- Modern forms

- Clear status indicators

- Smooth hover states

- Excellent spacing

Use an agricultural green as the primary brand color, but DO NOT make the entire interface green.

Green should mainly represent:

- Primary actions

- Active navigation

- Positive statuses

- Important highlights

Use neutral whites/greys for most surfaces.

Use amber/red only for warnings/errors.

==================================================

LAYOUT

==================================================

Create a professional application shell.

LEFT SIDEBAR:

- Dashboard

- Regions

- Farms

- Farm Owners

- Supervisors

- Activity Logs

Sidebar requirements:

- Collapsible

- Expanded by default

- Smooth collapse animation

- Collapsed state shows icons

- Tooltip on icons when collapsed

- Active menu clearly highlighted

- Admin profile at bottom

- Settings

- Logout

On mobile:

- Sidebar becomes a drawer

- Hamburger button opens it

==================================================

DASHBOARD

==================================================

Create a polished dashboard.

Header:

"Good morning, Admin"

Subtitle:

"Here's what's happening across your farm operations."

Top right:

- Notifications

- Current date

- Admin profile

KPI cards:

- Total Regions

- Total Farms

- Active Farms

- Farm Owners

- Supervisors

- Farms Needing Attention

Do not make the cards oversized.

Example:

42

Active Farms

+5 this month

Dashboard sections:

1. Recent Activity

Example:

Today

Mohit Dhote updated Chindhya Ganoba Gawande Farm

Fertigation completed

Yesterday

Rajesh Pawar updated Sunita Verma Farm

Farm inspection completed

2. Farm Status

Show:

- Active

- Needs Attention

- Completed

- Pending

Use a clean visual chart/progress visualization.

3. Region Overview

Columns:

Region

Farms

Active

Attention

Example:

Athner     9     7     2

Betul     11     9     2

Multai     7     6     1

Region rows must be clickable.

==================================================

REGIONS

==================================================

Create a modern Region management page.

Header:

Regions

"Manage geographic areas and their farms."

Toolbar:

Search regions

+ Add Region

Table:

Region

Code

Farms

Supervisors

Status

Example:

Athner

ATH-01

9 farms

3 supervisors

Active

IMPORTANT:

Region rows MUST be clickable.

When clicking a Region, show a Region Detail view.

Example:

Athner

9 Farms

3 Supervisors

127 Hectares

Then show:

Farms in Athner

Columns:

Farm

Owner

Village

Area

Supervisor

Status

Every farm must be clickable.

Also show:

Supervisors in this region

with:

Supervisor

Assigned Farms

Active Farms

Last Activity

==================================================

FARMS

==================================================

This is one of the most important pages.

Header:

Farms

"Manage farms, owners and supervisors."

Create a clean filter toolbar:

[ Search farms, owners or villages... ]

[ All Regions ▼ ]

[ All Supervisors ▼ ]

[ All Status ▼ ]

                         [ + Add Farm ]

DO NOT put these filters inside a giant ugly bordered box.

Keep the toolbar clean and modern.

Filters must work together.

Show:

"42 farms"

If filtering:

"Showing 8 of 42 farms"

"Clear filters"

Farm table:

Farm

Owner

Region

Village

Area

Supervisor

Status

Last Activity

Actions

Example:

Chindhya Ganoba Gawande

Farm #5755

Owner:

Chindhya Ganoba Gawande

Region:

Athner

Village:

Gouna

Area:

1 Hac.

Supervisor:

Mohit Dhote

Status:

Active

Last Activity:

25 Jan 2026

Rows should have subtle hover states.

Farm name must be clickable.

==================================================

ADD FARM

==================================================

Create a professional Add Farm modal or preferably a right-side drawer.

DO NOT create a giant ugly form.

Organize the form into sections.

SECTION 1:

Basic Information

- Farm Name

- Farm Code

- Farm Owner

- Mobile Number

SECTION 2:

Location

- Region

- Village

- Address

SECTION 3:

Assignment

- Supervisor

- Area

- Crop Type

SECTION 4:

Status

- Farm Status

IMPORTANT:

Region MUST be a dropdown.

Supervisor MUST be a dropdown.

Supervisor options should depend on Region.

Example:

Region:

Athner

Supervisor:

Mohit Dhote

Sandeep Sharma

Vijay More

When Region changes, update available supervisors.

Before saving show:

Region

Athner

Supervisor

Mohit Dhote

Buttons:

Cancel

Create Farm

After saving show a professional toast:

"Farm created successfully"

This is a demo, so update the dummy data in JavaScript.

==================================================

FARM DETAIL PAGE

==================================================

THIS IS THE MOST IMPORTANT SCREEN.

The client currently maintains farm information in Excel.

The application should transform the Excel into a modern digital Farm Profile.

DO NOT simply recreate Excel as a giant table.

The goal is:

SHOW MORE INFORMATION

WITH FEWER CLICKS.

The user should immediately understand the farm without opening many pages.

==================================================

FARM DETAIL HEADER

==================================================

Example:

Farms / Athner / Chindhya Ganoba Gawande

Chindhya Ganoba Gawande

Farm #5755

Gouna · Athner · 1 Hectare

● Active

Right side:

Edit Farm

+ Add Activity

==================================================

FARM SUMMARY

==================================================

Immediately below the header show compact summary cards:

AREA

1 Hac.

REGION

Athner

SUPERVISOR

Mohit Dhote

CROP

Plant

DRIP

Installed

LAST ACTIVITY

25 Jan 2026

These should be compact, elegant and visually clear.

==================================================

FARM DETAIL UX

==================================================

DO NOT hide everything behind tabs.

Important information should be visible immediately.

Use a combination of:

- Summary cards

- Information cards

- Expandable sections where useful

- Timeline

- Compact tables

Organize the Excel fields into logical sections.

For example:

--------------------------------

FARM INFORMATION

--------------------------------

Farmer Name

Chindhya Ganoba Gawande

Farm Code

5755

Mobile

9165131488

Region

Athner

Village

Gouna

Crop Type

Plant

--------------------------------

TEAM & RESPONSIBILITY

--------------------------------

Circle Supervisor

Mohit Dhote

Zonal In-Charge

Sandeep Choudhary

Development Team

Abhijit Patil

Development In-Charge

Suyash Dumbre

--------------------------------

DRIP & INFRASTRUCTURE

--------------------------------

Drip Survey Date

15 Oct 2025

Drip Company

JAIN

Area

1 Hac.

Quotation

₹105,553

Agreement With Farmer

YES

PO To Company

YES

Drip Delivered

YES

Drip Installed

YES

Plough

YES

Row Distance

5 ft

Dairy Preparation

YES

--------------------------------

SOWING & CROP

--------------------------------

Sowing Date

30 Dec 2025

Seed Details

D.E.B.

Seed Treatment

YES

Basal Dose

YES

Drenching

YES

Weedicide

YES

--------------------------------

EARTHING UP

--------------------------------

Lite Earthing Up

28 Feb 2026

Medium Earthing Up

27 Apr 2026

Heavy Earthing Up

28 May 2026

Use a responsive 2-column layout on desktop.

On mobile, stack cards.

==================================================

IMPORTANT:

EXCEL DATA

==================================================

Inspect the attached Excel file.

Use its actual fields and sample values.

Preserve important information.

If the Excel has additional fields, incorporate them into the Farm Detail page.

Do not randomly invent farm fields when the Excel already provides the structure.

The final Farm Detail page should clearly demonstrate:

"Existing Excel workflow → modern web application."

==================================================

RECENT ACTIVITY

==================================================

Activity should be visible directly on the Farm Detail page.

Do NOT force the user to click another page just to see recent activity.

Example:

RECENT ACTIVITY

Today

● Fertigation completed

First fertigation completed

Jan 20

● Farm Visit

Electricity fault found

Jan 15

● Weedicide Spray

Completed

Jan 05

● Drenching

Completed

Button:

View full timeline →

==================================================

FULL ACTIVITY TIMELINE

==================================================

Create a complete activity timeline.

Each activity should show:

Date

Time

Activity Type

Description

Supervisor

Added By

Example:

25 Jan 2026

10:30 AM

Fertigation

First fertigation completed.

Added by

Mohit Dhote

Activity types:

- Farm Visit

- Sowing

- Fertigation

- Weedicide

- Drenching

- Earthing Up

- Drip Installation

- Inspection

- Other

Button:

+ Add Activity

==================================================

FERTIGATION

==================================================

Create a modern fertigation schedule.

Do NOT simply create a huge Excel-style grid.

Show progress visually.

Example:

FERTIGATION PROGRESS

24 completed / planned

━━━━━━━━━━━━━━●━━━━━━━━━━

Then:

01 ✓ 25 Jan 2026

02 ✓ 05 Feb 2026

03 ✓ 22 Feb 2026

04 ✓ 05 Mar 2026

...

24 ○ Pending

Use visual states:

Completed

Upcoming

Pending

==================================================

FARM OWNER

==================================================

Farm Owners page.

Table:

Owner

Mobile

Region

Farms

Active Farms

Status

Clicking an owner should show their farms.

Example:

Ramesh Patil

2 Farms

Then show the farms mapped to them.

==================================================

SUPERVISORS

==================================================

Supervisors page.

Table:

Supervisor

Region

Assigned Farms

Active Farms

Last Activity

Status

IMPORTANT:

Supervisor rows MUST be clickable.

Clicking:

Mohit Dhote

should open Supervisor Detail.

Example:

Mohit Dhote

Circle Supervisor

Athner

9 Assigned Farms

7 Active

2 Need Attention

Then:

ASSIGNED FARMS

Farm

Owner

Village

Status

Last Activity

Every farm must be clickable.

==================================================

ACTIVITY LOGS

==================================================

Create a global Activity Logs page.

Filters:

Search

Region

Supervisor

Activity Type

Date

Timeline example:

Today

10:30 AM

Mohit Dhote

Chindhya Ganoba Gawande

Fertigation completed

Yesterday

4:10 PM

Rajesh Pawar

Sunita Verma Farm

Farm inspection completed

==================================================

NAVIGATION BEHAVIOR

==================================================

Use contextual navigation.

Region:

Region

↓

Farms inside Region

Supervisor:

Supervisor

↓

Assigned Farms

Farm:

Farm

↓

Complete Farm Profile

Owner:

Owner

↓

Mapped Farms

This relationship must be obvious throughout the UI.

==================================================

UX PRINCIPLES

==================================================

PRIORITY:

Reduce clicks.

Important information should be visible immediately.

Do not force users through unnecessary pages.

Use contextual actions.

Use breadcrumbs.

Use clear back navigation.

Use hover states.

Use empty states.

Use confirmation where appropriate.

Use toast notifications.

Use loading states if appropriate.

Make buttons obvious.

Make clickable rows visually discoverable.

==================================================

RESPONSIVE DESIGN

==================================================

Desktop-first.

Must also work on:

- Laptop

- Tablet

- Mobile

Tables should become horizontally scrollable or transform into cards on small screens.

Sidebar becomes a drawer on mobile.

Forms become single-column on mobile.

Farm detail cards stack on mobile.

==================================================

INTERACTION REQUIREMENTS

==================================================

Implement working JavaScript for:

- Sidebar collapse

- Navigation

- Search

- Region filter

- Supervisor filter

- Status filter

- Combined filters

- Clear filters

- Region → farms

- Supervisor → assigned farms

- Owner → farms

- Farm → farm detail

- Add Region

- Add Farm

- Add Owner

- Add Supervisor

- Add Activity

- Edit Farm

- Timeline

- Fertigation

- Dropdown dependencies

- Toast notifications

- Modal/drawer open/close

Do not leave dead buttons.

If an operation is simulated, show a toast.

Example:

"Farm created successfully"

"Activity added successfully"

"Supervisor assigned successfully"

==================================================

DUMMY DATA

==================================================

Use realistic data.

Regions:

Athner

Betul

Multai

Farms:

Chindhya Ganoba Gawande

Farm Code: 5755

Region: Athner

Village: Gouna

Area: 1 Hac.

Supervisor: Mohit Dhote

Ramesh Patil Farm

Farm Code: 5762

Region: Athner

Village: Kelha

Area: 2.5 Hac.

Supervisor: Mohit Dhote

Sunita Verma Farm

Farm Code: 5801

Region: Betul

Village: Bhainsdehi

Area: 1.8 Hac.

Supervisor: Rajesh Pawar

Supervisors:

Mohit Dhote

Rajesh Pawar

Vijay More

Create enough additional dummy data so the dashboard and tables feel realistic.

==================================================

VISUAL DESIGN RULES

==================================================

Use:

- Modern system font / Inter-like typography

- 8px spacing system

- 10–16px border radius

- Soft shadows

- Neutral background

- White cards

- Subtle borders

- Clear typography hierarchy

- Compact tables

- Modern dropdowns

- Modern buttons

- Clean badges

- Consistent iconography

Avoid:

- Excessive green

- Excessive rounded elements

- Giant buttons

- Giant headings

- Excessive empty space

- Huge tables

- Tiny unreadable text

- Too many tabs

- Too many modals

- Excessive animations

- Generic Bootstrap appearance

Animations should be subtle and fast.

==================================================

FINAL QUALITY BAR

==================================================

Before finishing, evaluate the UI as a senior product designer.

Ask:

"Would I confidently show this to a paying enterprise client?"

If the answer is no, improve it.

The final application should feel like a real product called:

"AgriTrack"

or another professional agricultural operations brand.

It should NOT feel like a coding exercise.

The most important screen is the Farm Detail page.

Make that screen especially polished, information-dense and easy to understand.

The final HTML should be immediately usable as a client-facing POC.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://cropwise-suite.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4f402982-3ae7-4863-8a00-18a58fbb1472).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
