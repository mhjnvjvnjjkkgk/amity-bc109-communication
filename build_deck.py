import os
import pptx
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE

# Initialize Presentation
prs = Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)
blank_layout = prs.slide_layouts[6] # Blank layout

# Color Palette matching the user's reference images
C_DARK_BG = RGBColor(0x14, 0x16, 0x18)       # #141618 Dark Charcoal
C_LIGHT_BG = RGBColor(0xF7, 0xF6, 0xF2)      # #F7F6F2 Warm Light Cream
C_WHITE = RGBColor(0xFF, 0xFF, 0xFF)         # #FFFFFF Pure White
C_DARK_CARD = RGBColor(0x1A, 0x1D, 0x20)     # #1A1D20 Subtle Dark Card
C_DARK_BORDER = RGBColor(0x2D, 0x31, 0x37)   # #2D3137 Subtle Dark Border

C_TEXT_DARK = RGBColor(0x1B, 0x1D, 0x20)     # #1B1D20 Near Black
C_TEXT_MUTED = RGBColor(0x60, 0x64, 0x6C)    # #60646C Muted Gray
C_TEXT_LIGHT = RGBColor(0xEE, 0xEE, 0xEE)    # #EEEEEE White-ish
C_TEXT_MUTED_LIGHT = RGBColor(0x9E, 0xA3, 0xAA) # Muted Light Text

C_RED = RGBColor(0xE6, 0x39, 0x46)           # #E63946 High-Contrast Crimson Red
C_GREEN = RGBColor(0x2D, 0x6A, 0x4F)         # #2D6A4F Deep Forest Green
C_OCHRE = RGBColor(0xC0, 0x8A, 0x3E)         # #C08A3E Warm Ochre / Amber
C_ORANGE = RGBColor(0xD9, 0x5D, 0x39)        # #D95D39 Terracotta Orange
C_CARD_BORDER = RGBColor(0xDC, 0xDA, 0xD3)   # #DCDAD3 Card Border
C_DIVIDER = RGBColor(0xE2, 0xE0, 0xD8)       # #E2E0D8 Divider Line

FONT_SERIF = "Georgia"
FONT_SANS = "Calibri"

def set_slide_bg(slide, color):
    bg_shape = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(7.5))
    bg_shape.fill.solid()
    bg_shape.fill.fore_color.rgb = color
    bg_shape.line.fill.background() # No line
    # Send to back if needed, but since it's added first, it's already in the back
    return bg_shape

def add_header(slide, section_tag, subtitle, folio_num, is_dark=False):
    # Top header text
    tb = slide.shapes.add_textbox(Inches(0.8), Inches(0.4), Inches(11.733), Inches(0.4))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
    p = tf.paragraphs[0]
    
    # Section Tag (Red)
    r1 = p.add_run()
    r1.text = section_tag + "   ·   "
    r1.font.name = FONT_SANS
    r1.font.size = Pt(10)
    r1.font.bold = True
    r1.font.color.rgb = C_RED
    
    # Subtitle (Muted)
    r2 = p.add_run()
    r2.text = subtitle.upper()
    r2.font.name = FONT_SANS
    r2.font.size = Pt(10)
    r2.font.bold = True
    r2.font.color.rgb = C_TEXT_MUTED_LIGHT if is_dark else C_TEXT_MUTED
    
    # Folio Right
    r3 = p.add_run()
    r3.text = f"                            —  FOLIO {folio_num:02d}"
    r3.font.name = FONT_SANS
    r3.font.size = Pt(10)
    r3.font.bold = True
    r3.font.color.rgb = C_TEXT_MUTED_LIGHT if is_dark else C_TEXT_MUTED
    
    # Divider line
    line = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(0.82), Inches(11.733), Inches(0.015))
    line.fill.solid()
    line.fill.fore_color.rgb = C_DARK_BORDER if is_dark else C_DIVIDER
    line.line.fill.background()

def add_footer(slide, folio_num, is_dark=False):
    # Footer line
    line = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(6.88), Inches(11.733), Inches(0.015))
    line.fill.solid()
    line.fill.fore_color.rgb = C_DARK_BORDER if is_dark else C_DIVIDER
    line.line.fill.background()
    
    tb = slide.shapes.add_textbox(Inches(0.8), Inches(6.98), Inches(11.733), Inches(0.35))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
    p = tf.paragraphs[0]
    
    r1 = p.add_run()
    r1.text = f"GREENSHIFT EDITORIAL BRIEF   {folio_num:02d} / 12     "
    r1.font.name = FONT_SANS
    r1.font.size = Pt(9.5)
    r1.font.bold = True
    r1.font.color.rgb = C_TEXT_MUTED_LIGHT if is_dark else C_TEXT_MUTED
    
    r2 = p.add_run()
    r2.text = "[GREENSHIFT MANUFACTURING LTD. · EXTERNAL STRATEGY CONSULTANCY BLUEPRINT]     "
    r2.font.name = FONT_SANS
    r2.font.size = Pt(9.5)
    r2.font.color.rgb = C_TEXT_MUTED_LIGHT if is_dark else C_TEXT_MUTED
    
    r3 = p.add_run()
    r3.text = f"FOLIO {folio_num:02d}"
    r3.font.name = FONT_SANS
    r3.font.size = Pt(9.5)
    r3.font.bold = True
    r3.font.color.rgb = C_TEXT_MUTED_LIGHT if is_dark else C_TEXT_MUTED

def add_headline(slide, text_prefix, text_italic_red, text_suffix="", sub_thesis="", is_dark=False):
    tb = slide.shapes.add_textbox(Inches(0.8), Inches(1.05), Inches(11.733), Inches(1.1))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
    
    p = tf.paragraphs[0]
    p.space_after = Pt(6)
    
    r1 = p.add_run()
    r1.text = text_prefix
    r1.font.name = FONT_SERIF
    r1.font.size = Pt(31)
    r1.font.bold = True
    r1.font.color.rgb = C_WHITE if is_dark else C_TEXT_DARK
    
    if text_italic_red:
        r2 = p.add_run()
        r2.text = text_italic_red
        r2.font.name = FONT_SERIF
        r2.font.size = Pt(31)
        r2.font.bold = True
        r2.font.italic = True
        r2.font.color.rgb = C_RED
        
    if text_suffix:
        r3 = p.add_run()
        r3.text = text_suffix
        r3.font.name = FONT_SERIF
        r3.font.size = Pt(31)
        r3.font.bold = True
        r3.font.color.rgb = C_WHITE if is_dark else C_TEXT_DARK
        
    if sub_thesis:
        p2 = tf.add_paragraph()
        r_sub = p2.add_run()
        r_sub.text = sub_thesis
        r_sub.font.name = FONT_SERIF
        r_sub.font.size = Pt(13)
        r_sub.font.italic = True
        r_sub.font.color.rgb = C_TEXT_MUTED_LIGHT if is_dark else C_TEXT_MUTED

def add_speaker_notes(slide, notes_text):
    notes_slide = slide.notes_slide
    text_frame = notes_slide.notes_text_frame
    text_frame.text = notes_text

# ==============================================================================
# SLIDE 01: COVER (DARK EDITORIAL THEME matching Screenshot 1)
# ==============================================================================
slide1 = prs.slides.add_slide(blank_layout)
set_slide_bg(slide1, C_DARK_BG)
add_header(slide1, "AN EDITORIAL BRIEF", "ISSUE 01 — THE GREENSHIFT DILEMMA", 1, is_dark=True)
add_footer(slide1, 1, is_dark=True)

# Small Category Header
tb_cat = slide1.shapes.add_textbox(Inches(0.8), Inches(1.3), Inches(6.5), Inches(0.35))
tf_cat = tb_cat.text_frame
tf_cat.margin_left = tf_cat.margin_top = tf_cat.margin_right = tf_cat.margin_bottom = 0
p = tf_cat.paragraphs[0]
r = p.add_run()
r.text = "STRATEGIC TRANSFORMATION BLUEPRINT   ·   GREENSHIFT MANUFACTURING LTD."
r.font.name = FONT_SANS
r.font.size = Pt(10)
r.font.bold = True
r.font.color.rgb = C_RED

# Giant Main Headline
tb_h1 = slide1.shapes.add_textbox(Inches(0.8), Inches(1.75), Inches(6.8), Inches(2.7))
tf_h1 = tb_h1.text_frame
tf_h1.word_wrap = True
tf_h1.margin_left = tf_h1.margin_top = tf_h1.margin_right = tf_h1.margin_bottom = 0

p1 = tf_h1.paragraphs[0]
r = p1.add_run()
r.text = "Securing our future,"
r.font.name = FONT_SERIF
r.font.size = Pt(46)
r.font.bold = True
r.font.color.rgb = C_WHITE

p2 = tf_h1.add_paragraph()
r = p2.add_run()
r.text = "protecting our people,"
r.font.name = FONT_SERIF
r.font.size = Pt(46)
r.font.bold = True
r.font.color.rgb = C_WHITE

p3 = tf_h1.add_paragraph()
r = p3.add_run()
r.text = "without compromise."
r.font.name = FONT_SERIF
r.font.size = Pt(46)
r.font.bold = True
r.font.italic = True
r.font.color.rgb = C_RED

# Red accent line
red_bar = slide1.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(4.7), Inches(1.4), Inches(0.06))
red_bar.fill.solid()
red_bar.fill.fore_color.rgb = C_RED
red_bar.line.fill.background()

# Subtitle paragraph
tb_sub = slide1.shapes.add_textbox(Inches(0.8), Inches(4.95), Inches(6.5), Inches(1.6))
tf_sub = tb_sub.text_frame
tf_sub.word_wrap = True
tf_sub.margin_left = tf_sub.margin_top = tf_sub.margin_right = tf_sub.margin_bottom = 0
p = tf_sub.paragraphs[0]
r = p.add_run()
r.text = "A comprehensive persuasive roadmap for GreenShift Manufacturing Ltd. to transition 4,500 employees, two plant closures, and a 50% carbon reduction without industrial unrest or commercial disruption."
r.font.name = FONT_SANS
r.font.size = Pt(13.5)
r.font.color.rgb = C_TEXT_LIGHT

# Right Card 1: Giant Metric Card
c1 = slide1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(7.8), Inches(1.3), Inches(4.733), Inches(2.2))
c1.fill.solid()
c1.fill.fore_color.rgb = C_DARK_CARD
c1.line.color.rgb = C_DARK_BORDER
c1.line.width = Pt(1)

tb_c1 = slide1.shapes.add_textbox(Inches(8.05), Inches(1.45), Inches(4.2), Inches(1.8))
tf_c1 = tb_c1.text_frame
tf_c1.word_wrap = True
tf_c1.margin_left = tf_c1.margin_top = tf_c1.margin_right = tf_c1.margin_bottom = 0

p = tf_c1.paragraphs[0]
r = p.add_run()
r.text = "WORKFORCE & INDUSTRIAL TRANSITION SCALE"
r.font.name = FONT_SANS
r.font.size = Pt(9.5)
r.font.bold = True
r.font.color.rgb = C_TEXT_MUTED_LIGHT

p_num = tf_c1.add_paragraph()
p_num.space_before = Pt(4)
r = p_num.add_run()
r.text = "4,500 Staff · 50% Cut"
r.font.name = FONT_SERIF
r.font.size = Pt(27)
r.font.bold = True
r.font.color.rgb = C_WHITE

p_desc = tf_c1.add_paragraph()
p_desc.space_before = Pt(6)
r = p_desc.add_run()
r.text = "700 shop-floor workers redeployed from two closing plants. A 5-year net-zero mandate with an urgent 6-month stakeholder consensus window."
r.font.name = FONT_SANS
r.font.size = Pt(11)
r.font.color.rgb = C_TEXT_MUTED_LIGHT

# Right Card 2: Strategic Consultancy Panel (7 Leads)
c2 = slide1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(7.8), Inches(3.7), Inches(4.733), Inches(2.85))
c2.fill.solid()
c2.fill.fore_color.rgb = C_DARK_CARD
c2.line.color.rgb = C_DARK_BORDER
c2.line.width = Pt(1)

tb_c2 = slide1.shapes.add_textbox(Inches(8.05), Inches(3.85), Inches(4.2), Inches(2.55))
tf_c2 = tb_c2.text_frame
tf_c2.word_wrap = True
tf_c2.margin_left = tf_c2.margin_top = tf_c2.margin_right = tf_c2.margin_bottom = 0

p = tf_c2.paragraphs[0]
r = p.add_run()
r.text = "EXTERNAL STRATEGIC CONSULTANCY PANEL   ·   7 LEADS"
r.font.name = FONT_SANS
r.font.size = Pt(9.5)
r.font.bold = True
r.font.color.rgb = C_RED

roles = [
    ("Speaker 1 (Consultancy Lead)", "Strategic Mandate & Transformation Pillars"),
    ("Speaker 2 (Stakeholder Strategist)", "Power-Resistance Matrix & Message Failure"),
    ("Speaker 3 (Behavioral Analyst)", "Kahneman's Loss Aversion & Cultural Barriers"),
    ("Speaker 4 (Rhetoric & Transition Lead)", "Ethos/Logos Framework & Automation Compact"),
    ("Speaker 5 (Channel Director)", "Multi-Tiered Media Architecture"),
    ("Speaker 6 (Crisis & Roadmap Lead)", "24-Hour Rumor Defense & 6-Month Timeline"),
    ("Speaker 7 (Governance & Viva Anchor)", "Balanced Scorecard & Executive Defense")
]

for name, role in roles:
    p_lead = tf_c2.add_paragraph()
    p_lead.space_before = Pt(2.5)
    r_dot = p_lead.add_run()
    r_dot.text = "• "
    r_dot.font.color.rgb = C_RED
    r_dot.font.size = Pt(10)
    
    r_n = p_lead.add_run()
    r_n.text = name + " — "
    r_n.font.name = FONT_SANS
    r_n.font.size = Pt(10)
    r_n.font.bold = True
    r_n.font.color.rgb = C_WHITE
    
    r_r = p_lead.add_run()
    r_r.text = role
    r_r.font.name = FONT_SANS
    r_r.font.size = Pt(9.5)
    r_r.font.color.rgb = C_TEXT_MUTED_LIGHT

add_speaker_notes(slide1, 
"SPEAKER 1 (CONSULTANCY LEAD) PRESENTER SCRIPT:\n"
"Welcome members of the board and CEO Ananya Rao. Today, our 7-member external consultancy team presents the comprehensive persuasive blueprint for Project GreenShift 2030. GreenShift stands at a critical crossroads. Over 35 years, this company built an extraordinary reputation for employment stability across four states. But today, commercial survival demands an aggressive 50% decarbonization transformation. Our mission is to walk you through an operational roadmap that aligns all six stakeholder groups, preserves labor peace, and protects our vital European export revenue.")

print("Slide 1 generated.")

# ==============================================================================
# Helper for 4 Metric Cards (Slides 2, 7, 10 etc.)
# ==============================================================================
def add_four_metric_cards(slide, y_pos, cards_data):
    # cards_data: list of 4 tuples: (tag, accent_color, big_stat, desc)
    card_w = Inches(2.78)
    card_h = Inches(1.55)
    spacing = Inches(0.2)
    start_x = Inches(0.8)
    
    for i, (tag, color, stat, desc) in enumerate(cards_data):
        x = start_x + i * (card_w + spacing)
        
        # Base card
        card = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, y_pos, card_w, card_h)
        card.fill.solid()
        card.fill.fore_color.rgb = C_WHITE
        card.line.color.rgb = C_CARD_BORDER
        card.line.width = Pt(1)
        
        # Colored top accent line
        top_bar = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, x, y_pos, card_w, Inches(0.06))
        top_bar.fill.solid()
        top_bar.fill.fore_color.rgb = color
        top_bar.line.fill.background()
        
        # Textbox inside card
        tb = slide.shapes.add_textbox(x + Inches(0.18), y_pos + Inches(0.14), card_w - Inches(0.36), card_h - Inches(0.2))
        tf = tb.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
        
        p_tag = tf.paragraphs[0]
        r = p_tag.add_run()
        r.text = tag
        r.font.name = FONT_SANS
        r.font.size = Pt(8.5)
        r.font.bold = True
        r.font.color.rgb = C_TEXT_MUTED
        
        p_stat = tf.add_paragraph()
        p_stat.space_before = Pt(2)
        r = p_stat.add_run()
        r.text = stat
        r.font.name = FONT_SERIF
        r.font.size = Pt(19)
        r.font.bold = True
        r.font.color.rgb = C_TEXT_DARK
        
        p_desc = tf.add_paragraph()
        p_desc.space_before = Pt(3)
        r = p_desc.add_run()
        r.text = desc
        r.font.name = FONT_SANS
        r.font.size = Pt(9.5)
        r.font.color.rgb = C_TEXT_MUTED

# ==============================================================================
# SLIDE 02: THE STRATEGIC MANDATE (Matching Screenshot 2 layout)
# ==============================================================================
slide2 = prs.slides.add_slide(blank_layout)
set_slide_bg(slide2, C_LIGHT_BG)
add_header(slide2, "§ 01 — THE STRATEGIC MANDATE", "THE FIVE PILLARS OF 2030", 2)
add_headline(slide2, "Why standing still is fatal, yet ", "moving forward", " sparks revolt.",
             "European export renewals require verified emissions cuts; internal distrust turns modernization into a powder keg.")
add_footer(slide2, 2)

s2_metrics = [
    ("01 · HERITAGE", C_RED, "35 Years", "Reputation for stable lifetime employment across 4 states."),
    ("02 · CARBON GOAL", C_OCHRE, "50% Cut", "Non-negotiable requirement for European client contracts."),
    ("03 · PLANT CLOSURES", C_GREEN, "2 Units", "Decommissioning obsolete, carbon-draining legacy units."),
    ("04 · RESKILLING", C_TEXT_DARK, "700 Staff", "Transitioning manual floor workers into automated lines.")
]
add_four_metric_cards(slide2, Inches(2.25), s2_metrics)

# Bottom Two Large Cards (Left vs Right)
card_bottom_w = Inches(5.766)
card_bottom_h = Inches(2.65)
y_bottom = Inches(4.0)

# Left Bottom Card
c_b1 = slide2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), y_bottom, card_bottom_w, card_bottom_h)
c_b1.fill.solid()
c_b1.fill.fore_color.rgb = C_WHITE
c_b1.line.color.rgb = C_CARD_BORDER
c_b1.line.width = Pt(1)

tb_b1 = slide2.shapes.add_textbox(Inches(1.05), y_bottom + Inches(0.2), card_bottom_w - Inches(0.5), card_bottom_h - Inches(0.4))
tf_b1 = tb_b1.text_frame
tf_b1.word_wrap = True
tf_b1.margin_left = tf_b1.margin_top = tf_b1.margin_right = tf_b1.margin_bottom = 0

p = tf_b1.paragraphs[0]
r = p.add_run()
r.text = "EXTERNAL COMMERCIAL PRESSURES (THE COST OF INACTION)"
r.font.name = FONT_SANS
r.font.size = Pt(11)
r.font.bold = True
r.font.color.rgb = C_OCHRE

b1_bullets = [
    ("European Client Ultimatums: ", "Major European buyers have formally conditioned future contracts on verified carbon reductions. Walking away destroys 40%+ of high-margin export orders."),
    ("Tightening Regulatory Net: ", "Indian industrial emissions standards are escalating rapidly. Operating outdated facilities incurs recurring penalties and operational bans."),
    ("Rising Energy Overhead: ", "Aging thermal equipment and inefficient motors are driving manufacturing unit costs dangerously above modernized competitors.")
]
for title, text in b1_bullets:
    p_b = tf_b1.add_paragraph()
    p_b.space_before = Pt(6)
    r = p_b.add_run()
    r.text = "• " + title
    r.font.bold = True
    r.font.size = Pt(10)
    r.font.color.rgb = C_TEXT_DARK
    r2 = p_b.add_run()
    r2.text = text
    r2.font.size = Pt(10)
    r2.font.color.rgb = C_TEXT_MUTED

# Right Bottom Card
c_b2 = slide2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.766), y_bottom, card_bottom_w, card_bottom_h)
c_b2.fill.solid()
c_b2.fill.fore_color.rgb = C_WHITE
c_b2.line.color.rgb = C_CARD_BORDER
c_b2.line.width = Pt(1)

tb_b2 = slide2.shapes.add_textbox(Inches(7.016), y_bottom + Inches(0.2), card_bottom_w - Inches(0.5), card_bottom_h - Inches(0.4))
tf_b2 = tb_b2.text_frame
tf_b2.word_wrap = True
tf_b2.margin_left = tf_b2.margin_top = tf_b2.margin_right = tf_b2.margin_bottom = 0

p = tf_b2.paragraphs[0]
r = p.add_run()
r.text = "INTERNAL HUMAN REALITIES (THE COST OF CHANGE)"
r.font.name = FONT_SANS
r.font.size = Pt(11)
r.font.bold = True
r.font.color.rgb = C_GREEN

b2_bullets = [
    ("700 Families Impacted: ", "Decommissioning two units triggers deep displacement anxiety. In our 35-year culture, employment is seen as a lifetime social contract."),
    ("AI Surveillance Anxieties: ", "Floor workers interpret automated monitoring not as efficiency, but as punitive digital surveillance designed to replace workers with machines."),
    ("Past Rollout Cynicism: ", "Previous management change programs were executed via rigid top-down decrees with zero shop-floor follow-through, cementing deep mistrust.")
]
for title, text in b2_bullets:
    p_b = tf_b2.add_paragraph()
    p_b.space_before = Pt(6)
    r = p_b.add_run()
    r.text = "• " + title
    r.font.bold = True
    r.font.size = Pt(10)
    r.font.color.rgb = C_TEXT_DARK
    r2 = p_b.add_run()
    r2.text = text
    r2.font.size = Pt(10)
    r2.font.color.rgb = C_TEXT_MUTED

add_speaker_notes(slide2,
"SPEAKER 1 (CONSULTANCY LEAD) PRESENTER SCRIPT:\n"
"Folio 02 lays out the core tension: GreenShift cannot afford inaction. European clients are demanding net-zero proof, and our energy costs are spiraling. But when leadership talks about closing two plants and introducing AI monitoring, workers hear mass layoffs. As external advisors, our primary finding is that GreenShift does not have a technology problem; it has a trust deficit. A decree from the executive suite will trigger a strike. We must present change not as an environmental hobby, but as the only viable mechanism to protect 4,500 jobs.")

print("Slide 2 generated.")

# ==============================================================================
# SLIDE 03: STAKEHOLDER ARCHITECTURE (Matching Screenshot 3 layout: Tiers + Dark Card)
# ==============================================================================
slide3 = prs.slides.add_slide(blank_layout)
set_slide_bg(slide3, C_LIGHT_BG)
add_header(slide3, "§ 02 — STAKEHOLDER ARCHITECTURE", "POWER, INCENTIVES & RESISTANCE", 3)
add_headline(slide3, "Why a single message guarantees ", "immediate failure", ".",
             "Different stakeholders evaluate transformation using completely opposing metrics; what comforts buyers terrifies machinists.")
add_footer(slide3, 3)

# Left Side: 4 Horizontal Power/Resistance Tiers
tier_data = [
    ("INTERNATIONAL BUYERS", "EU Contract Retention", "100%", RGBColor(0x55, 0x5B, 0x66), "Non-negotiable requirement for contract renewal"),
    ("LABOR UNION & WORKERS", "Threat of Industrial Action", "90%", C_RED, "Threatens total production shutdown without written job pacts"),
    ("INSTITUTIONAL INVESTORS", "Quarterly Capex Sensitivity", "75%", C_OCHRE, "Fears dividend cuts and capital expenditure margin drag"),
    ("SENIOR PLANT MANAGERS", "Covert Resistance & Bonus Risk", "60%", C_ORANGE, "Fears missing annual plant production targets and KPIs")
]

start_y = Inches(2.3)
bar_gap = Inches(1.05)
for i, (name, role, pct, col, note) in enumerate(tier_data):
    y = start_y + i * bar_gap
    
    # Label and stat
    tb_lbl = slide3.shapes.add_textbox(Inches(0.8), y, Inches(3.2), Inches(0.8))
    tf_lbl = tb_lbl.text_frame
    tf_lbl.word_wrap = True
    tf_lbl.margin_left = tf_lbl.margin_top = tf_lbl.margin_right = tf_lbl.margin_bottom = 0
    
    p = tf_lbl.paragraphs[0]
    r = p.add_run()
    r.text = name + "  "
    r.font.name = FONT_SANS
    r.font.size = Pt(10)
    r.font.bold = True
    r.font.color.rgb = C_TEXT_DARK
    
    r_sub = p.add_run()
    r_sub.text = role
    r_sub.font.name = FONT_SERIF
    r_sub.font.size = Pt(12)
    r_sub.font.bold = True
    r_sub.font.color.rgb = C_TEXT_DARK
    
    p_note = tf_lbl.add_paragraph()
    r_n = p_note.add_run()
    r_n.text = note
    r_n.font.name = FONT_SANS
    r_n.font.size = Pt(8.5)
    r_n.font.color.rgb = C_TEXT_MUTED
    
    # Percentage indicator text
    tb_pct = slide3.shapes.add_textbox(Inches(6.4), y + Inches(0.12), Inches(0.8), Inches(0.4))
    tf_pct = tb_pct.text_frame
    p_p = tf_pct.paragraphs[0]
    r_p = p_p.add_run()
    r_p.text = pct
    r_p.font.name = FONT_SANS
    r_p.font.size = Pt(10.5)
    r_p.font.bold = True
    r_p.font.color.rgb = col
    
    # Horizontal Bar
    full_bar_w = Inches(2.2)
    pct_val = float(pct.replace("%", "")) / 100.0
    bar = slide3.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(4.1), y + Inches(0.18), full_bar_w * pct_val, Inches(0.28))
    bar.fill.solid()
    bar.fill.fore_color.rgb = col
    bar.line.fill.background()

# Right Side: Dark Contrast Card (Matching Screenshot 3)
c_dark = slide3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(7.35), Inches(2.25), Inches(5.183), Inches(4.35))
c_dark.fill.solid()
c_dark.fill.fore_color.rgb = C_DARK_BG
c_dark.line.color.rgb = C_DARK_BORDER
c_dark.line.width = Pt(1)

tb_cd = slide3.shapes.add_textbox(Inches(7.6), Inches(2.45), Inches(4.7), Inches(4.0))
tf_cd = tb_cd.text_frame
tf_cd.word_wrap = True
tf_cd.margin_left = tf_cd.margin_top = tf_cd.margin_right = tf_cd.margin_bottom = 0

p = tf_cd.paragraphs[0]
r = p.add_run()
r.text = "THE DIVERGENT UTILITY PRINCIPLE"
r.font.name = FONT_SANS
r.font.size = Pt(9.5)
r.font.bold = True
r.font.color.rgb = C_RED

p_main = tf_cd.add_paragraph()
p_main.space_before = Pt(8)
r = p_main.add_run()
r.text = "When an executive broadcasts 'Green Transformation', each group hears an "
r.font.name = FONT_SERIF
r.font.size = Pt(16)
r.font.color.rgb = C_WHITE
r_red = p_main.add_run()
r_red.text = "existential threat"
r_red.font.name = FONT_SERIF
r_red.font.size = Pt(16)
r_red.font.bold = True
r_red.font.italic = True
r_red.font.color.rgb = C_RED
r_end = p_main.add_run()
r_end.text = " to their primary incentive."
r_end.font.name = FONT_SERIF
r_end.font.size = Pt(16)
r_end.font.color.rgb = C_WHITE

cd_points = [
    ("To Senior Managers: ", "It sounds like missed annual production targets, reduced department budgets, and personal blame for transition downtime."),
    ("To Factory Workers: ", "It sounds like automated machines eliminating human labor and invasive AI tracking every movement."),
    ("To the Labor Union: ", "It looks like management breaking its traditional social compact and dismantling worker bargaining leverage."),
    ("To Institutional Investors: ", "It sounds like massive capital expenditure depressing quarterly dividend yield and stock price."),
    ("Strategic Mandate: ", "A single broadcast message alienates all four groups simultaneously. We must implement strictly segmented message architectures.")
]

for title, desc in cd_points:
    p_pt = tf_cd.add_paragraph()
    p_pt.space_before = Pt(5)
    r = p_pt.add_run()
    r.text = "• " + title
    r.font.bold = True
    r.font.size = Pt(9.5)
    r.font.color.rgb = C_WHITE
    r_d = p_pt.add_run()
    r_d.text = desc
    r_d.font.size = Pt(9.5)
    r_d.font.color.rgb = C_TEXT_MUTED_LIGHT

add_speaker_notes(slide3,
"SPEAKER 2 (STAKEHOLDER STRATEGIST) PRESENTER SCRIPT:\n"
"Folio 03 solves the fundamental dilemma of why broadcast messaging always fails in industrial turnarounds. Notice the chart on the left: our stakeholders have completely opposing utility curves. When CEO Ananya Rao speaks broadly about sustainability, investors fear margin dilution, middle managers panic about losing their annual bonus, and floor workers fear machine replacement. As your consultants, our first non-negotiable rule is total message segmentation: we must speak to each group in the currency of their specific risk.")

print("Slide 3 generated.")

# ==============================================================================
# Helper for 3 Vertical White Cards (Slides 4, 5, 8 etc.)
# ==============================================================================
def add_three_vertical_cards(slide, y_pos, cards_data, card_h=Inches(4.35)):
    card_w = Inches(3.777)
    spacing = Inches(0.2)
    start_x = Inches(0.8)
    
    for i, (title, tag, color, bullets) in enumerate(cards_data):
        x = start_x + i * (card_w + spacing)
        
        # Base card
        card = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, y_pos, card_w, card_h)
        card.fill.solid()
        card.fill.fore_color.rgb = C_WHITE
        card.line.color.rgb = C_CARD_BORDER
        card.line.width = Pt(1)
        
        # Colored top bar
        top_bar = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, x, y_pos, card_w, Inches(0.07))
        top_bar.fill.solid()
        top_bar.fill.fore_color.rgb = color
        top_bar.line.fill.background()
        
        # Content box
        tb = slide.shapes.add_textbox(x + Inches(0.2), y_pos + Inches(0.18), card_w - Inches(0.4), card_h - Inches(0.3))
        tf = tb.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
        
        p_t = tf.paragraphs[0]
        r = p_t.add_run()
        r.text = title
        r.font.name = FONT_SERIF
        r.font.size = Pt(15.5)
        r.font.bold = True
        r.font.color.rgb = C_TEXT_DARK
        
        p_tag = tf.add_paragraph()
        p_tag.space_before = Pt(2)
        r = p_tag.add_run()
        r.text = tag
        r.font.name = FONT_SANS
        r.font.size = Pt(8.5)
        r.font.bold = True
        r.font.color.rgb = color
        
        for b_title, b_desc in bullets:
            p_b = tf.add_paragraph()
            p_b.space_before = Pt(6)
            r = p_b.add_run()
            r.text = "• " + b_title + ": "
            r.font.bold = True
            r.font.size = Pt(9.5)
            r.font.color.rgb = C_TEXT_DARK
            r_d = p_b.add_run()
            r_d.text = b_desc
            r_d.font.size = Pt(9.5)
            r_d.font.color.rgb = C_TEXT_MUTED

# ==============================================================================
# SLIDE 04: ROOT BARRIERS (Matching Screenshot 4 layout: 3 Cards)
# ==============================================================================
slide4 = prs.slides.add_slide(blank_layout)
set_slide_bg(slide4, C_LIGHT_BG)
add_header(slide4, "§ 03 — ROOT BARRIERS", "PSYCHOLOGY, STRUCTURE & CULTURE", 4)
add_headline(slide4, "The invisible walls stopping ", "rational logic", ".",
             "Data cannot override instinct when people believe their identity and livelihood are under direct threat.")
add_footer(slide4, 4)

s4_cards = [
    ("PSYCHOLOGICAL FRICTION", "KAHNEMAN'S LOSS AVERSION · STATUS QUO BIAS", C_RED, [
        ("Loss Aversion Asymmetry", "Behavioral economics proves the psychological pain of losing a known job is twice as powerful as the speculative promise of learning new high-tech tools."),
        ("Status Quo Entrenchment", "Factory machinists have honed their daily physical routines over 20+ years; forcing automation feels like stripping away their professional competence."),
        ("Catastrophic Extrapolation", "Without immediate facts, workers assume the closure of 2 units is merely Phase 1 of a total shutdown across all 4 manufacturing states.")
    ]),
    ("ORGANIZATIONAL DEFICIT", "CREDIBILITY GAP · MIDDLE-LAYER GATEKEEPING", C_OCHRE, [
        ("Historical Cynicism", "Previous corporate initiatives were announced with grand fanfare but collapsed in execution, leaving employees deeply cynical toward executive promises."),
        ("Plant Manager Gatekeeping", "Senior plant managers publicly agree with net-zero mandates, but quietly filter communication to avoid disruptions to their quarterly bonus quotas."),
        ("Rumor Network Dominance", "Informal peer grapevines and shift-change WhatsApp groups travel faster than formal corporate memos, controlling the narrative before management speaks.")
    ]),
    ("CULTURAL PATERNALISM", "THE 35-YEAR TRADITIONAL EMPLOYMENT BOND", C_GREEN, [
        ("Breach of Family Contract", "In Indian heavy manufacturing, long-standing employers are viewed as paternalistic institutions. Plant closures feel like a moral betrayal."),
        ("Community Desertification", "Closing two plants impacts not just direct workers, but local transport operators, canteens, and small family suppliers surrounding the factory gates."),
        ("Loss of Communal Clout", "Union representatives fear that automation and individual reskilling programs will permanently fracture shop-floor solidarity and collective bargaining power.")
    ])
]
add_three_vertical_cards(slide4, Inches(2.25), s4_cards)

add_speaker_notes(slide4,
"SPEAKER 3 (BEHAVIORAL ANALYST) PRESENTER SCRIPT:\n"
"Folio 04 diagnoses the three psychological and structural roadblocks preventing buy-in. First, Kahneman's Loss Aversion: human beings fear loss twice as much as they value potential gains. To an experienced assembly worker, a promised reskilling academy feels theoretical, but losing their workstation is a concrete catastrophe. Second, our middle managers are trapped in an incentive conflict—they fear their annual bonuses will be wiped out by downtime. Third, our 35-year paternalistic culture makes closures feel like personal abandonment. We cannot persuade until we address these root emotional realities.")

print("Slide 4 generated.")

# ==============================================================================
# SLIDE 05: RHETORICAL ARCHITECTURE (3 Columns + Cialdini Banner)
# ==============================================================================
slide5 = prs.slides.add_slide(blank_layout)
set_slide_bg(slide5, C_LIGHT_BG)
add_header(slide5, "§ 04 — RHETORICAL ARCHITECTURE", "ETHOS, LOGOS & PATHOS IN ACTION", 5)
add_headline(slide5, "A three-dimensional proof that ", "changes minds", ".",
             "Edicts demand compliance, but persuasive rhetoric secures authentic, voluntary participation across every plant.")
add_footer(slide5, 5)

s5_cards = [
    ("01 · ETHOS (CREDIBILITY)", "INDEPENDENT TRUST & UNION PARTNERSHIP", C_RED, [
        ("Joint Co-Signatures", "Announcements co-delivered with respected union shop-stewards rather than isolated executive releases."),
        ("Third-Party Skill Audits", "Partnering with certified government technical training institutes to guarantee redeployment credentials."),
        ("Executive Pay Alignment", "CEO and senior leadership commit to capping bonuses until the 700-worker reskilling milestone is met.")
    ]),
    ("02 · LOGOS (EVIDENCE)", "COMMERCIAL DATA & EXPORT SURVIVAL", C_OCHRE, [
        ("The Cost of Refusal", "Presenting verified client procurement audits: losing European contracts destroys 3x more jobs than automation."),
        ("Financial Payback Model", "Demonstrating how energy efficiency and automated lines lower unit costs, protecting factory longevity."),
        ("Transparent Plant Accounting", "Sharing verifiable emissions and operational data to prove why the two units cannot be retrofitted.")
    ]),
    ("03 · PATHOS (SHARED PRIDE)", "PROTECTING OUR 35-YEAR INDUSTRIAL HERITAGE", C_GREEN, [
        ("Intergenerational Legacy", "'Modernizing GreenShift today so our children inherit competitive, clean engineering jobs for the next 35 years.'"),
        ("Honoring Past Service", "Publicly honoring the contributions of the two closing plants while carrying their legacy forward."),
        ("National Industrial Pride", "Framing GreenShift as India's pioneer in sustainable heavy machinery manufacturing.")
    ])
]
add_three_vertical_cards(slide5, Inches(2.25), s5_cards, card_h=Inches(3.45))

# Bottom Cialdini Reciprocity Banner
c_banner = slide5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(5.85), Inches(11.733), Inches(0.85))
c_banner.fill.solid()
c_banner.fill.fore_color.rgb = C_WHITE
c_banner.line.color.rgb = C_CARD_BORDER
c_banner.line.width = Pt(1)

top_b = slide5.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(5.85), Inches(11.733), Inches(0.04))
top_b.fill.solid()
top_b.fill.fore_color.rgb = C_RED
top_b.line.fill.background()

tb_ban = slide5.shapes.add_textbox(Inches(1.05), Inches(5.95), Inches(11.2), Inches(0.65))
tf_ban = tb_ban.text_frame
tf_ban.word_wrap = True
tf_ban.margin_left = tf_ban.margin_top = tf_ban.margin_right = tf_ban.margin_bottom = 0
p = tf_ban.paragraphs[0]
r = p.add_run()
r.text = "CIALDINI'S RECIPROCITY NUDGE: "
r.font.name = FONT_SANS
r.font.size = Pt(10)
r.font.bold = True
r.font.color.rgb = C_RED

r_txt = p.add_run()
r_txt.text = "Management invests 100% of reskilling capital during paid working hours before asking for operational flexibility. By giving upfront security, we trigger a psychological obligation for labor cooperation rather than industrial action."
r_txt.font.name = FONT_SANS
r_txt.font.size = Pt(10)
r_txt.font.color.rgb = C_TEXT_DARK

add_speaker_notes(slide5,
"SPEAKER 4 (RHETORIC & TRANSITION LEAD) PRESENTER SCRIPT:\n"
"Folio 05 translates Aristotle’s rhetoric into concrete industrial negotiation. Ethos: we rebuild shattered credibility by bringing union stewards into joint announcements and having third-party technical bodies verify the training. Logos: we show the cold mathematical truth—if we lose our European export contracts, we lose over 1,500 jobs, far worse than a managed 700-person transition. Pathos: we appeal to 35 years of pride. Finally, we apply Cialdini's principle of Reciprocity: GreenShift pays for 100% of reskilling on company time before asking for productivity concessions.")

print("Slide 5 generated.")

# ==============================================================================
# SLIDE 06: WORKFORCE SOCIAL CONTRACT (2x2 Grid of Concrete Policies)
# ==============================================================================
slide6 = prs.slides.add_slide(blank_layout)
set_slide_bg(slide6, C_LIGHT_BG)
add_header(slide6, "§ 05 — THE WORKFORCE COMPACT", "DEFEATING AI & AUTOMATION PANIC", 6)
add_headline(slide6, "Replacing automation panic with ", "enforceable facts", ".",
             "Vague executive assurances breed deep cynicism; shop-floor workers require signed, contractual protections.")
add_footer(slide6, 6)

s6_grid = [
    ("01 · EXPLICIT AI BOUNDARIES", "STRICT HEALTH & SAFETY SURVEILLANCE FIREWALL", C_RED, [
        ("Machine Only: ", "AI monitors bearing vibration, heat dissipation, and energy leaks—strictly machine diagnostics."),
        ("No Worker Tracking: ", "Explicit prohibition against using AI cameras or wearables for tracking bathroom breaks or physical pacing."),
        ("Joint Oversight: ", "Union representatives sit on the quarterly AI Audit Committee to review surveillance compliance.")
    ]),
    ("02 · BINDING 'ZERO-LAYOFF' ACCORD", "FORMALLY SIGNED EMPLOYMENT & WAGE GUARANTEE", C_OCHRE, [
        ("Preserved Base Pay: ", "All 700 transitioning workers retain their current grade, seniority, and base wage rates."),
        ("Guaranteed Placement: ", "Direct contractual pipeline into automated assembly, renewable maintenance, or quality control."),
        ("Union Sign-Off: ", "Legally binding tripartite agreement co-signed with labor ministry and union officials.")
    ]),
    ("03 · ON-THE-CLOCK TRANSITION ACADEMY", "FULLY FUNDED, CERTIFIED TECHNICAL RESKILLING", C_GREEN, [
        ("Paid Training Shifts: ", "All technical coursework takes place during normal paid 8-hour shifts—zero unpaid personal time."),
        ("Certified Credentials: ", "Workers receive nationally accredited mechatronics and automation operator certificates."),
        ("Mentorship Pairing: ", "Experienced machinists pair with automation engineers to co-develop new operating guidelines.")
    ]),
    ("04 · DIGNIFIED VOLUNTARY RETIREMENT", "GENEROUS EXIT OPTION FOR SENIOR STAFF", C_TEXT_DARK, [
        ("Voluntary Choice: ", "Senior staff with 25+ years of service offered an attractive, above-statutory retirement settlement."),
        ("Healthcare Continuity: ", "Retirement package includes extended 5-year family medical insurance coverage."),
        ("Respectful Recognition: ", "Honoring retiring pioneers with formal plant ceremonies and transition gratuities.")
    ])
]

# Render 2x2 Grid
w_g = Inches(5.766)
h_g = Inches(2.1)
coords = [
    (Inches(0.8), Inches(2.25)),
    (Inches(6.766), Inches(2.25)),
    (Inches(0.8), Inches(4.55)),
    (Inches(6.766), Inches(4.55))
]

for idx, (title, tag, color, bullets) in enumerate(s6_grid):
    x, y = coords[idx]
    
    card = slide6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, y, w_g, h_g)
    card.fill.solid()
    card.fill.fore_color.rgb = C_WHITE
    card.line.color.rgb = C_CARD_BORDER
    card.line.width = Pt(1)
    
    top_b = slide6.shapes.add_shape(MSO_SHAPE.RECTANGLE, x, y, w_g, Inches(0.05))
    top_b.fill.solid()
    top_b.fill.fore_color.rgb = color
    top_b.line.fill.background()
    
    tb = slide6.shapes.add_textbox(x + Inches(0.2), y + Inches(0.12), w_g - Inches(0.4), h_g - Inches(0.2))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
    
    p = tf.paragraphs[0]
    r = p.add_run()
    r.text = title
    r.font.name = FONT_SERIF
    r.font.size = Pt(13)
    r.font.bold = True
    r.font.color.rgb = C_TEXT_DARK
    
    p_tag = tf.add_paragraph()
    r = p_tag.add_run()
    r.text = tag
    r.font.name = FONT_SANS
    r.font.size = Pt(8)
    r.font.bold = True
    r.font.color.rgb = color
    
    for b_title, b_desc in bullets:
        p_b = tf.add_paragraph()
        p_b.space_before = Pt(3)
        r = p_b.add_run()
        r.text = "• " + b_title
        r.font.bold = True
        r.font.size = Pt(9)
        r.font.color.rgb = C_TEXT_DARK
        r2 = p_b.add_run()
        r2.text = b_desc
        r2.font.size = Pt(9)
        r2.font.color.rgb = C_TEXT_MUTED

add_speaker_notes(slide6,
"SPEAKER 4 (RHETORIC & TRANSITION LEAD) PRESENTER SCRIPT:\n"
"Folio 06 presents our core operational answer to Analytical Question 5: how to calm automation fears without destroying management credibility. Empty corporate slogans will fail. We present a four-part Workforce Social Contract: First, strict legal boundaries on AI—it monitors machines for vibration and energy leaks, never workers' personal movements. Second, an ironclad 'Zero-Layoff' accord guaranteeing base pay and seniority. Third, training conducted on company time. Fourth, a dignified voluntary retirement scheme. This turns an unpopular mandate into a legally protected partnership.")

print("Slide 6 generated.")

# ==============================================================================
# SLIDE 07: STRATEGIC CHANNELS (4 Audience Columns / Media Richness)
# ==============================================================================
slide7 = prs.slides.add_slide(blank_layout)
set_slide_bg(slide7, C_LIGHT_BG)
add_header(slide7, "§ 06 — STRATEGIC CHANNELS", "MATCHING MEDIUM TO STAKES", 7)
add_headline(slide7, "Channel selection ", "signals respect", " across groups.",
             "Media richness must match the emotional and financial gravity of each stakeholder audience.")
add_footer(slide7, 7)

s7_channels = [
    ("FACTORY FLOOR", C_RED, "HIGH RICHNESS · IN-PERSON", [
        ("15-Min Shift Huddles", "Daily morning briefings run by trusted foremen at machine stations."),
        ("Bilingual Handouts", "Printed visual guides in Hindi and regional state languages—no complex jargon."),
        ("Open-Mic Town Halls", "Monthly plant-wide forums with live, uncensored Q&A directly with CEO Ananya Rao.")
    ]),
    ("SENIOR MANAGERS", C_OCHRE, "COLLABORATIVE CO-DESIGN", [
        ("KPI Recalibration Workshops", "Closed working sessions to adjust transition quotas so bonuses aren't penalized."),
        ("Weekly Pulse Dashboards", "Operational tracking on downtime, spare parts, and reskilling velocity."),
        ("Direct Escalation Line", "Private channel to resolve supply chain bottlenecks with executive backing.")
    ]),
    ("LABOR UNION", C_GREEN, "FORMAL BILATERAL ACCORD", [
        ("Bipartite Roundtables", "Structured negotiation tables with signed minutes and legal advisors present."),
        ("Advance Notice Protocol", "30-day advance briefings before any machine movement or line modifications."),
        ("Joint Taskforce Visits", "Union-management delegations touring modernized reference plants.")
    ]),
    ("INVESTORS & CLIENTS", C_TEXT_DARK, "RIGOROUS ESG GOVERNANCE", [
        ("Quarterly ESG Briefings", "Transparent carbon audit reports aligned with EU compliance standards."),
        ("Capex Payback Roadmaps", "Financial models proving renewable energy investments yield positive ROI in 4.2 years."),
        ("Client Audit Verification", "Facilitating independent European client verification of plant decarbonization.")
    ])
]

# 4 Columns side-by-side
col_w = Inches(2.78)
start_x = Inches(0.8)
col_h = Inches(4.35)

for i, (title, color, rich_level, bullets) in enumerate(s7_channels):
    x = start_x + i * (col_w + Inches(0.2))
    
    card = slide7.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, Inches(2.25), col_w, col_h)
    card.fill.solid()
    card.fill.fore_color.rgb = C_WHITE
    card.line.color.rgb = C_CARD_BORDER
    card.line.width = Pt(1)
    
    top_b = slide7.shapes.add_shape(MSO_SHAPE.RECTANGLE, x, Inches(2.25), col_w, Inches(0.06))
    top_b.fill.solid()
    top_b.fill.fore_color.rgb = color
    top_b.line.fill.background()
    
    tb = slide7.shapes.add_textbox(x + Inches(0.16), Inches(2.4), col_w - Inches(0.32), col_h - Inches(0.3))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
    
    p = tf.paragraphs[0]
    r = p.add_run()
    r.text = title
    r.font.name = FONT_SERIF
    r.font.size = Pt(14)
    r.font.bold = True
    r.font.color.rgb = C_TEXT_DARK
    
    p_sub = tf.add_paragraph()
    p_sub.space_before = Pt(2)
    r = p_sub.add_run()
    r.text = rich_level
    r.font.name = FONT_SANS
    r.font.size = Pt(8.5)
    r.font.bold = True
    r.font.color.rgb = color
    
    for b_title, b_desc in bullets:
        p_b = tf.add_paragraph()
        p_b.space_before = Pt(8)
        r = p_b.add_run()
        r.text = "• " + b_title + ": "
        r.font.bold = True
        r.font.size = Pt(9.5)
        r.font.color.rgb = C_TEXT_DARK
        r2 = p_b.add_run()
        r2.text = b_desc
        r2.font.size = Pt(9.5)
        r2.font.color.rgb = C_TEXT_MUTED

add_speaker_notes(slide7,
"SPEAKER 5 (CHANNEL DIRECTOR) PRESENTER SCRIPT:\n"
"Folio 07 answers Analytical Questions 6 and 7: channel selection is strategically decisive. An executive memo or generic email sent to factory workers is seen as cold and dismissive. For shop-floor machinists, we deploy rich, high-touch channels: 15-minute shift huddles in regional languages and open-mic town halls. For plant managers, we create closed workshops that adjust their KPIs so they aren't punished for downtime. For the union, formal bipartite roundtables with signed minutes. Medium choice communicates respect before the first word is even spoken.")

print("Slide 7 generated.")

# ==============================================================================
# SLIDE 08: CRISIS & RUMOR MANAGEMENT (3 Vertical Defense Pillars)
# ==============================================================================
slide8 = prs.slides.add_slide(blank_layout)
set_slide_bg(slide8, C_LIGHT_BG)
add_header(slide8, "§ 07 — CRISIS & RUMOR DEFENSE", "RAPID REBUTTAL PROTOCOLS", 8)
add_headline(slide8, "Defeating shop-floor rumors with ", "same-day truth", ".",
             "In the absence of immediate facts, gossip fills the vacuum; executive silence is always interpreted as guilt.")
add_footer(slide8, 8)

s8_cards = [
    ("24-HOUR RUMOR BOARDS", "SAME-DAY PHYSICAL & DIGITAL VERIFICATION", C_RED, [
        ("Plant Gate Bulletins", "Prominently posted physical notice boards at all factory gates and canteens directly answering the day's rumors."),
        ("'Fact vs. Fiction' Grid", "Clear two-column layout: 'What the Rumor Claims' vs. 'What the Signed Agreement Actually States.'"),
        ("Multilingual Formats", "Printed in regional state languages to prevent deliberate translation distortion in worker WhatsApp groups.")
    ]),
    ("EQUIPPING FOREMEN", "FIRST-LINE SUPERVISOR RAPID BRIEFING PACKS", C_OCHRE, [
        ("Daily 7:00 AM Packets", "Shift supervisors receive a 1-page briefing sheet every morning addressing current locker-room gossip."),
        ("Frontline Credibility", "Workers trust their immediate shift supervisor far more than corporate executives; foremen become our primary ambassadors."),
        ("No Retaliation Rule", "Supervisors are trained to listen to worker fears with empathy rather than threatening disciplinary action.")
    ]),
    ("ANONYMOUS INFOLINE", "CONFIDENTIAL TWO-WAY PEER FEEDBACK CHANNEL", C_GREEN, [
        ("Direct WhatsApp Desk", "Dedicated corporate WhatsApp helpline allowing workers to send audio notes or text queries anonymously."),
        ("Guaranteed 12-Hour SLA", "Every submitted query receives a verified, written response within 12 hours from the transformation team."),
        ("Weekly FAQ Digest", "Top recurring concerns published openly on factory monitors to ensure collective transparency.")
    ])
]
add_three_vertical_cards(slide8, Inches(2.25), s8_cards)

add_speaker_notes(slide8,
"SPEAKER 6 (CRISIS & ROADMAP LEAD) PRESENTER SCRIPT:\n"
"Folio 08 details our Crisis and Rumor Management Plan for Analytical Question 8. In Indian manufacturing plants, canteen talk and WhatsApp voice notes spread panic in minutes. Corporate silence is always viewed as proof of guilt. We establish a rapid 24-hour response engine: First, daily 'Fact vs. Fiction' boards at every plant gate. Second, arming frontline supervisors at 7:00 AM every morning with verified answers. Third, an anonymous WhatsApp channel where workers can ask tough questions without fear of retaliation. We don't suppress rumors; we overwhelm them with verified facts.")

print("Slide 8 generated.")

# ==============================================================================
# SLIDE 09: THE 6-MONTH ROADMAP (3 Horizontal Phase Cards)
# ==============================================================================
slide9 = prs.slides.add_slide(blank_layout)
set_slide_bg(slide9, C_LIGHT_BG)
add_header(slide9, "§ 08 — THE 6-MONTH ROADMAP", "PHASED OPERATIONAL EXECUTION", 9)
add_headline(slide9, "Six months to turn resistance into ", "collective ownership", ".",
             "A disciplined, milestone-gated campaign moving from internal executive alignment to public operational rollout.")
add_footer(slide9, 9)

s9_phases = [
    ("PHASE 1 · MONTHS 01–02", "EXECUTIVE ALIGNMENT & UNION LISTENING TABLES", C_RED, [
        ("Executive KPI Recalibration: Board adjusts plant manager targets to prevent bonus sabotage.", "Week 01–04"),
        ("Bipartite Union Listening Tours: Closed-door roundtables to draft the Zero-Layoff Reskilling Charter.", "Week 03–06"),
        ("Establish Rumor Defense Engine: Launching the 24-hour fact-checking boards and frontline supervisor packs.", "Week 05–08")
    ]),
    ("PHASE 2 · MONTHS 03–04", "CO-DESIGN, PILOT RESKILLING & COMMUNITY COMPACT", C_OCHRE, [
        ("Pilot Transition Cohort: First 150 workers enter the automated line Academy on full company pay.", "Week 09–12"),
        ("Local Community Vendor Pact: Economic mitigation program for suppliers around the two closing units.", "Week 11–14"),
        ("Mid-Term Sentiment Audit: Anonymous workforce pulse survey to identify remaining friction points.", "Week 15–16")
    ]),
    ("PHASE 3 · MONTHS 05–06", "ACCORD FINALIZATION & JOINT IMPLEMENTATION LAUNCH", C_GREEN, [
        ("Tripartite Accord Signing: Formal joint signing of the transition treaty by CEO Ananya Rao and Union leaders.", "Week 17–20"),
        ("European Contract Renewals: Submitting verified decarbonization roadmap to secure multi-year export pacts.", "Week 21–22"),
        ("Unified Rollout Announcement: Joint public launch celebrating 35 years of heritage and 2030 leadership.", "Week 23–24")
    ])
]

# 3 Horizontal Cards Stacked
h_card_w = Inches(11.733)
h_card_h = Inches(1.3)
h_gap = Inches(0.18)
start_y = Inches(2.25)

for i, (title, subtitle, color, milestones) in enumerate(s9_phases):
    y = start_y + i * (h_card_h + h_gap)
    
    card = slide9.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), y, h_card_w, h_card_h)
    card.fill.solid()
    card.fill.fore_color.rgb = C_WHITE
    card.line.color.rgb = C_CARD_BORDER
    card.line.width = Pt(1)
    
    # Left colored vertical accent strip
    l_strip = slide9.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), y, Inches(0.1), h_card_h)
    l_strip.fill.solid()
    l_strip.fill.fore_color.rgb = color
    l_strip.line.fill.background()
    
    tb = slide9.shapes.add_textbox(Inches(1.1), y + Inches(0.1), h_card_w - Inches(0.5), h_card_h - Inches(0.2))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
    
    p = tf.paragraphs[0]
    r = p.add_run()
    r.text = title + "   ·   "
    r.font.name = FONT_SERIF
    r.font.size = Pt(12)
    r.font.bold = True
    r.font.color.rgb = C_TEXT_DARK
    
    r_sub = p.add_run()
    r_sub.text = subtitle
    r_sub.font.name = FONT_SANS
    r_sub.font.size = Pt(9.5)
    r_sub.font.bold = True
    r_sub.font.color.rgb = color
    
    for m_text, m_date in milestones:
        p_m = tf.add_paragraph()
        p_m.space_before = Pt(2.5)
        r = p_m.add_run()
        r.text = "• " + m_text + "  "
        r.font.size = Pt(9.5)
        r.font.color.rgb = C_TEXT_MUTED
        r_d = p_m.add_run()
        r_d.text = f"[{m_date}]"
        r_d.font.bold = True
        r_d.font.size = Pt(8.5)
        r_d.font.color.rgb = C_TEXT_DARK

add_speaker_notes(slide9,
"SPEAKER 6 (CRISIS & ROADMAP LEAD) PRESENTER SCRIPT:\n"
"Folio 09 details our six-month operational execution timeline answering Analytical Question 10. We have exactly six months before the final plan must be enacted. Phase 1 (Months 1–2): We lock in senior manager alignment by fixing their incentive structures and hold closed-door listening sessions with union leaders. Phase 2 (Months 3–4): We launch the reskilling pilot for the first 150 workers to prove that the company keeps its promises. Phase 3 (Months 5–6): We co-sign the tripartite agreement with union leadership and execute European contract renewals. This turns a deadline into a structured momentum builder.")

print("Slide 9 generated.")

# ==============================================================================
# SLIDE 10: GOVERNANCE & METRICS (4 Metric Dashboards + Scorecard)
# ==============================================================================
slide10 = prs.slides.add_slide(blank_layout)
set_slide_bg(slide10, C_LIGHT_BG)
add_header(slide10, "§ 09 — GOVERNANCE & METRICS", "BALANCED SUCCESS SCORECARD", 10)
add_headline(slide10, "Persuasion must be ", "proven and accountable", ".",
             "Tracking behavioral outcomes and operational stability rather than vanity employee satisfaction surveys.")
add_footer(slide10, 10)

s10_metrics = [
    ("01 · TRUST INDEX", C_RED, "> 75%", "Target sentiment in bi-weekly anonymous pulse audits across all 4 states."),
    ("02 · GRIEVANCE CUT", C_OCHRE, "- 60%", "Reduction in formal dispute notices; zero unauthorized walkouts or strikes."),
    ("03 · CERTIFICATION", C_GREEN, "90%+", "Pass rate for 700 workers completing accredited automated line training."),
    ("04 · EXPORT CONTRACTS", C_TEXT_DARK, "100%", "Full renewal rate on European client procurement contracts.")
]
add_four_metric_cards(slide10, Inches(2.25), s10_metrics)

# Bottom Two Governance Blocks
c_gov1 = slide10.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(4.0), card_bottom_w, card_bottom_h)
c_gov1.fill.solid()
c_gov1.fill.fore_color.rgb = C_WHITE
c_gov1.line.color.rgb = C_CARD_BORDER
c_gov1.line.width = Pt(1)

tb_g1 = slide10.shapes.add_textbox(Inches(1.05), Inches(4.2), card_bottom_w - Inches(0.5), card_bottom_h - Inches(0.4))
tf_g1 = tb_g1.text_frame
tf_g1.word_wrap = True
tf_g1.margin_left = tf_g1.margin_top = tf_g1.margin_right = tf_g1.margin_bottom = 0

p = tf_g1.paragraphs[0]
r = p.add_run()
r.text = "ETHICAL PERSUASION GUARDRAILS (THE RED LINES)"
r.font.name = FONT_SANS
r.font.size = Pt(11)
r.font.bold = True
r.font.color.rgb = C_RED

g1_bullets = [
    ("Zero False Optimism: ", "Never promise obsolete plants will reopen. Honest operational reality builds far more lasting credibility than temporary sugarcoated lies."),
    ("Full Transparency on AI Scope: ", "Publish complete architectural blueprints showing exactly what sensors do and do not capture on the production floor."),
    ("Protected Dissent Channels: ", "Workers and union delegates can voice objections and report implementation delays without fear of managerial retribution.")
]
for title, text in g1_bullets:
    p_b = tf_g1.add_paragraph()
    p_b.space_before = Pt(6)
    r = p_b.add_run()
    r.text = "• " + title
    r.font.bold = True
    r.font.size = Pt(10)
    r.font.color.rgb = C_TEXT_DARK
    r2 = p_b.add_run()
    r2.text = text
    r2.font.size = Pt(10)
    r2.font.color.rgb = C_TEXT_MUTED

c_gov2 = slide10.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.766), Inches(4.0), card_bottom_w, card_bottom_h)
c_gov2.fill.solid()
c_gov2.fill.fore_color.rgb = C_WHITE
c_gov2.line.color.rgb = C_CARD_BORDER
c_gov2.line.width = Pt(1)

tb_g2 = slide10.shapes.add_textbox(Inches(7.016), Inches(4.2), card_bottom_w - Inches(0.5), card_bottom_h - Inches(0.4))
tf_g2 = tb_g2.text_frame
tf_g2.word_wrap = True
tf_g2.margin_left = tf_g2.margin_top = tf_g2.margin_right = tf_g2.margin_bottom = 0

p = tf_g2.paragraphs[0]
r = p.add_run()
r.text = "LONG-TERM COMMERCIAL & SOCIAL VALUE (ROI)"
r.font.name = FONT_SANS
r.font.size = Pt(11)
r.font.bold = True
r.font.color.rgb = C_GREEN

g2_bullets = [
    ("4.2-Year Capital Payback: ", "Renewable energy and automated efficiency gains amortize the initial capital expenditure within 50 months."),
    ("Preempting Carbon Tariffs: ", "Achieving 50% decarbonization protects GreenShift from EU Carbon Border Adjustment taxes, expanding export margins."),
    ("Workforce Longevity: ", "700 workers upskilled from manual labor to automated operators represent a premier technical asset for the next 35 years.")
]
for title, text in g2_bullets:
    p_b = tf_g2.add_paragraph()
    p_b.space_before = Pt(6)
    r = p_b.add_run()
    r.text = "• " + title
    r.font.bold = True
    r.font.size = Pt(10)
    r.font.color.rgb = C_TEXT_DARK
    r2 = p_b.add_run()
    r2.text = text
    r2.font.size = Pt(10)
    r2.font.color.rgb = C_TEXT_MUTED

add_speaker_notes(slide10,
"SPEAKER 7 (GOVERNANCE & VIVA ANCHOR) PRESENTER SCRIPT:\n"
"Folio 10 presents our Success Measurement Framework and Ethical Boundaries for Analytical Question 9. Persuasion without governance degenerates into propaganda. We track hard operational metrics: a 60% drop in formal grievances, zero strikes, 90% reskilling certification, and 100% European contract retention. Equally important are our ethical red lines: we never offer false hope about obsolete plants, and we guarantee complete transparency on AI. This strategy delivers commercial durability while honoring our social responsibilities.")

print("Slide 10 generated.")

# ==============================================================================
# SLIDE 11: 7-MEMBER SPEAKING BLUEPRINT (Matching Screenshot 11 format)
# ==============================================================================
slide11 = prs.slides.add_slide(blank_layout)
set_slide_bg(slide11, C_LIGHT_BG)
add_header(slide11, "§ 10 — CONSULTANCY TEAM PLAN", "SEVEN-MEMBER SPEAKING BLUEPRINT", 11)
add_headline(slide11, "Seven speakers, ", "one synchronized", " consulting brief.",
             "Our integrated delivery framework ensures each team member leads a sharp 2-minute strategic section with seamless handoffs.")
add_footer(slide11, 11)

s11_team = [
    ("SPEAKER 1 — CONSULTANCY LEAD", "Folios 01 & 02", [
        "Welcomes Board & CEO Ananya Rao",
        "Frames 35-yr legacy & export crisis",
        "Introduces 5 pillars of GreenShift 2030"
    ]),
    ("SPEAKER 2 — STAKEHOLDER STRATEGIST", "Folio 03", [
        "Explains why single message fails",
        "Walks through Power-Resistance matrix",
        "Details manager vs worker tension"
    ]),
    ("SPEAKER 3 — BEHAVIORAL ANALYST", "Folio 04", [
        "Analyzes Kahneman's Loss Aversion",
        "Diagnoses past credibility deficit",
        "Unpacks paternalistic cultural friction"
    ]),
    ("SPEAKER 4 — RHETORIC & TRANSITION LEAD", "Folios 05 & 06", [
        "Delivers Ethos/Logos/Pathos triad",
        "Presents Cialdini Reciprocity model",
        "Unveils 700-Worker Social Compact"
    ]),
    ("SPEAKER 5 — CHANNEL DIRECTOR", "Folio 07", [
        "Details media richness theory",
        "Shop-floor huddles vs executive memos",
        "Closed-door manager KPI workshops"
    ]),
    ("SPEAKER 6 — CRISIS & ROADMAP LEAD", "Folios 08 & 09", [
        "24-hr Fact vs Rumor board setup",
        "Supervisors as frontline ambassadors",
        "6-month phased Gantt milestones"
    ]),
    ("SPEAKER 7 — GOVERNANCE & VIVA ANCHOR", "Folios 10, 11, 12", [
        "Balanced scorecard & ethics limits",
        "Summarizes consultancy team plan",
        "Leads executive Viva Voce defense"
    ])
]

# 7 Cards arranged cleanly (top row 4, bottom row 3)
w_t = Inches(2.78)
h_t = Inches(2.05)
start_x = Inches(0.8)

# Top row of 4
for i in range(4):
    name, folios, bullets = s11_team[i]
    x = start_x + i * (w_t + Inches(0.2))
    y = Inches(2.25)
    
    card = slide11.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, y, w_t, h_t)
    card.fill.solid()
    card.fill.fore_color.rgb = C_WHITE
    card.line.color.rgb = C_CARD_BORDER
    card.line.width = Pt(1)
    
    tb = slide11.shapes.add_textbox(x + Inches(0.14), y + Inches(0.1), w_t - Inches(0.28), h_t - Inches(0.2))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
    
    p = tf.paragraphs[0]
    r = p.add_run()
    r.text = name
    r.font.name = FONT_SANS
    r.font.size = Pt(8.5)
    r.font.bold = True
    r.font.color.rgb = C_RED
    
    p_f = tf.add_paragraph()
    r = p_f.add_run()
    r.text = folios
    r.font.name = FONT_SERIF
    r.font.size = Pt(11.5)
    r.font.bold = True
    r.font.color.rgb = C_TEXT_DARK
    
    for b in bullets:
        p_b = tf.add_paragraph()
        p_b.space_before = Pt(2.5)
        r = p_b.add_run()
        r.text = "• " + b
        r.font.size = Pt(9)
        r.font.color.rgb = C_TEXT_MUTED

# Bottom row of 3 (centered nicely)
start_x_b = Inches(2.29)
for i in range(3):
    name, folios, bullets = s11_team[4 + i]
    x = start_x_b + i * (w_t + Inches(0.2))
    y = Inches(4.5)
    
    card = slide11.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, y, w_t, h_t)
    card.fill.solid()
    card.fill.fore_color.rgb = C_WHITE
    card.line.color.rgb = C_CARD_BORDER
    card.line.width = Pt(1)
    
    tb = slide11.shapes.add_textbox(x + Inches(0.14), y + Inches(0.1), w_t - Inches(0.28), h_t - Inches(0.2))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
    
    p = tf.paragraphs[0]
    r = p.add_run()
    r.text = name
    r.font.name = FONT_SANS
    r.font.size = Pt(8.5)
    r.font.bold = True
    r.font.color.rgb = C_RED
    
    p_f = tf.add_paragraph()
    r = p_f.add_run()
    r.text = folios
    r.font.name = FONT_SERIF
    r.font.size = Pt(11.5)
    r.font.bold = True
    r.font.color.rgb = C_TEXT_DARK
    
    for b in bullets:
        p_b = tf.add_paragraph()
        p_b.space_before = Pt(2.5)
        r = p_b.add_run()
        r.text = "• " + b
        r.font.size = Pt(9)
        r.font.color.rgb = C_TEXT_MUTED

add_speaker_notes(slide11,
"SPEAKER 7 (GOVERNANCE & VIVA ANCHOR) PRESENTER SCRIPT:\n"
"Folio 11 demonstrates our synchronized team execution model. To deliver a compelling consultancy pitch, every team member has a dedicated, high-impact focus area. Speaker 1 establishes the burning platform. Speaker 2 deconstructs the stakeholder matrix. Speaker 3 breaks down behavioral barriers. Speaker 4 presents the rhetorical model and workforce compact. Speaker 5 details channel architecture. Speaker 6 manages rumor defense and timeline execution. And I coordinate governance, scorecards, and viva defense. This guarantees a polished, highly coordinated executive pitch.")

print("Slide 11 generated.")

# ==============================================================================
# SLIDE 12: THE EPILOGUE (3 Tough Viva Voce Questions matching Screenshot 12)
# ==============================================================================
slide12 = prs.slides.add_slide(blank_layout)
set_slide_bg(slide12, C_LIGHT_BG)
add_header(slide12, "THE EPILOGUE", "3 QUESTIONS YOUR PROFESSOR WILL ASK", 12)
add_headline(slide12, "Defending the blueprint ", "under scrutiny", ".",
             "Three razor-sharp executive answers to the toughest strategic questions during board and academic viva defense.")
add_footer(slide12, 12)

s12_cards = [
    ("VIVA QUESTION 01", "WHY IS A SINGLE MESSAGE GUARANTEED TO FAIL?", C_RED, [
        ("Opposing Utility Functions: ", "Stakeholders evaluate transformation with contradictory metrics. What gives European clients confidence (fast carbon cuts) creates panic for workers (plant closures) and alarm for investors (capex)."),
        ("The Neutralization Trap: ", "A generic corporate memo satisfies no one and alienates everyone. High-power stakeholders immediately detect evasiveness and assume the worst."),
        ("Required Resolution: ", "Rigorous audience segmentation: framing the transition around contract retention for buyers, ROI for investors, and guaranteed retraining for labor.")
    ]),
    ("VIVA QUESTION 02", "WHY IS LOSS AVERSION OUR BIGGEST HURDLE?", C_OCHRE, [
        ("Kahneman's 2x Ratio: ", "Behavioral economics confirms that the pain of an immediate loss is twice as psychologically powerful as the prospect of an equivalent future gain."),
        ("Asymmetry of Experience: ", "Losing a familiar workstation is concrete, immediate, and visible; learning modern digital skills feels abstract and risky."),
        ("Required Resolution: ", "De-risking the loss upfront: the 'Zero-Layoff' Compact and 100% paid on-the-clock training neutralize loss aversion before asking for worker participation.")
    ]),
    ("VIVA QUESTION 03", "HOW DO WE STOP MANAGERS QUIETLY RESISTING?", C_GREEN, [
        ("The Incentive Misalignment: ", "Senior managers privately resist not because they hate sustainability, but because transition disruptions threaten their quarterly quotas and annual bonuses."),
        ("Covert Sabotage: ", "In public they nod agreement; in private they delay equipment changeovers and hoard information to protect department numbers."),
        ("Required Resolution: ", "Incentive recalibration: management communication must include temporary waiver of downtime penalties, directly tying executive bonuses to reskilling success.")
    ])
]
add_three_vertical_cards(slide12, Inches(2.25), s12_cards)

add_speaker_notes(slide12,
"SPEAKER 7 (GOVERNANCE & VIVA ANCHOR) PRESENTER SCRIPT:\n"
"Folio 12 prepares our team for the professor's toughest viva voce questions. When asked why a single message fails, we prove that conflicting stakeholder utility curves make generic messaging suicidal. When asked about Kahneman’s Loss Aversion, we explain why the threat of plant closure triggers double the emotional resistance of speculative reskilling promises. And when asked how to stop middle managers from quietly sabotaging the rollout, we show that the only solution is incentive alignment—relieving their short-term production quotas. With this, our consultancy team concludes our strategic blueprint and welcomes questions from the board.")

print("Slide 12 generated.")

# Save presentation
output_pptx = r"D:\communication project\Project_GreenShift_2030_Editorial_Brief.pptx"
prs.save(output_pptx)
print(f"SUCCESS: Saved 12-slide presentation to {output_pptx}")
