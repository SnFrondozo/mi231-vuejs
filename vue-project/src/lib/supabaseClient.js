import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://aojyayclsmiaiwmtksru.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvanlheWNsc21pYWl3bXRrc3J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0NTI3OTEsImV4cCI6MjA1NDAyODc5MX0.y0Td5Eh3vzrYpHmCmi4Fzj-ltREOCXugOvdKhXkVa_g')