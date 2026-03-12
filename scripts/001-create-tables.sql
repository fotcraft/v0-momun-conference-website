-- Chair Applications Table
CREATE TABLE chair_applications (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  school VARCHAR(255) NOT NULL,
  grade VARCHAR(50) NOT NULL,
  date_of_birth DATE,
  position_type VARCHAR(50) NOT NULL CHECK (position_type IN ('main_chair', 'co_chair')),
  committee_preference_1 VARCHAR(100) NOT NULL,
  committee_preference_2 VARCHAR(100),
  committee_preference_3 VARCHAR(100),
  mun_experience TEXT NOT NULL,
  chairing_experience TEXT,
  motivation TEXT NOT NULL,
  additional_info TEXT,
  cv_url TEXT,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'under_review', 'accepted', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Head Applications Table (for Secretariat/Head positions)
CREATE TABLE head_applications (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  school VARCHAR(255) NOT NULL,
  grade VARCHAR(50) NOT NULL,
  date_of_birth DATE,
  position_applied VARCHAR(100) NOT NULL,
  mun_experience TEXT NOT NULL,
  leadership_experience TEXT NOT NULL,
  motivation TEXT NOT NULL,
  vision TEXT,
  additional_info TEXT,
  cv_url TEXT,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'under_review', 'accepted', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- School Registrations Table
CREATE TABLE school_registrations (
  id SERIAL PRIMARY KEY,
  school_name VARCHAR(255) NOT NULL,
  country VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL,
  address TEXT,
  head_delegate_name VARCHAR(255) NOT NULL,
  head_delegate_email VARCHAR(255) NOT NULL,
  head_delegate_phone VARCHAR(50),
  faculty_advisor_name VARCHAR(255) NOT NULL,
  faculty_advisor_email VARCHAR(255) NOT NULL,
  faculty_advisor_phone VARCHAR(50),
  estimated_delegates INTEGER NOT NULL,
  committee_preferences TEXT,
  country_preferences TEXT,
  dietary_requirements TEXT,
  accessibility_needs TEXT,
  additional_notes TEXT,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'waitlisted', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Individual Delegate Registrations Table
CREATE TABLE individual_registrations (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  date_of_birth DATE,
  school VARCHAR(255),
  grade VARCHAR(50) NOT NULL,
  country VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL,
  guardian_name VARCHAR(255),
  guardian_email VARCHAR(255),
  guardian_phone VARCHAR(50),
  mun_experience TEXT,
  committee_preference_1 VARCHAR(100) NOT NULL,
  committee_preference_2 VARCHAR(100),
  committee_preference_3 VARCHAR(100),
  country_preference_1 VARCHAR(100),
  country_preference_2 VARCHAR(100),
  country_preference_3 VARCHAR(100),
  dietary_requirements TEXT,
  accessibility_needs TEXT,
  motivation TEXT,
  additional_notes TEXT,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'waitlisted', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for faster queries
CREATE INDEX idx_chair_applications_email ON chair_applications(email);
CREATE INDEX idx_chair_applications_status ON chair_applications(status);
CREATE INDEX idx_head_applications_email ON head_applications(email);
CREATE INDEX idx_head_applications_status ON head_applications(status);
CREATE INDEX idx_school_registrations_email ON school_registrations(head_delegate_email);
CREATE INDEX idx_school_registrations_status ON school_registrations(status);
CREATE INDEX idx_individual_registrations_email ON individual_registrations(email);
CREATE INDEX idx_individual_registrations_status ON individual_registrations(status);
