words = [
"Абакан",
"Абинск",
"Агата",
"Адлер",
"Адыгейск",
"Алагир",
"Алапаевск",
"Алдан",
"Александровск",
"Алексин",
"Амдерма",
"Амурск",
"Анадырь",
"Анапа",
"Ангарск",
"Андреаполь",
"Анива",
"Апатиты",
"Апрелевка",
"Апшеронск",
"Аргаяш",
"Ардон",
"Арзамас",
"Армавир",
"Арсеньев",
"Артем",
"Архыз",
"Асбест",
"Асино",
"Астрахань",
"Ахтубинск",
"Ачинск",
"Ачхой Мартан",
]

words.each do |word|

  TimeZone.seed do |s|
    s.name     = word
    s.hours    = rand(-10..10)
  end

end

