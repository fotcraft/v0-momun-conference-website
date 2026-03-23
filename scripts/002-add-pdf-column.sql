-- Add motivation_letter_pdf_url column to chair_applications table
ALTER TABLE chair_applications 
ADD COLUMN IF NOT EXISTS motivation_letter_pdf_url TEXT;
