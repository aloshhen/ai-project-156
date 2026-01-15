import { Target, Trophy, Users, TrendingUp, Star, Shield, Activity, Youtube, MessageSquare, ArrowRight, Menu, X, ChevronRight, BarChart, Clock, Calendar } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const newsRef = useRef(null)
  const newsInView = useInView(newsRef, { once: true })
  
  const rankingRef = useRef(null)
  const rankingInView = useInView(rankingRef, { once: true })
  
  const guidesRef = useRef(null)
  const guidesInView = useInView(guidesRef, { once: true })

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-xl z-50 border-b border-orange-600/30">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Target className="w-10 h-10 text-orange-500" />
              <div>
                <span className="text-2xl font-black text-white tracking-tight">APEX</span>
                <span className="text-2xl font-black text-orange-500 tracking-tight">HUB</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('news')} className="text-gray-300 hover:text-orange-500 transition-colors font-semibold">
                Новости
              </button>
              <button onClick={() => scrollToSection('ranking')} className="text-gray-300 hover:text-orange-500 transition-colors font-semibold">
                Рейтинг
              </button>
              <button onClick={() => scrollToSection('guides')} className="text-gray-300 hover:text-orange-500 transition-colors font-semibold">
                Гайды
              </button>
              <button onClick={() => scrollToSection('streams')} className="text-gray-300 hover:text-orange-500 transition-colors font-semibold">
                Стримы
              </button>
              <button onClick={() => scrollToSection('forum')} className="text-gray-300 hover:text-orange-500 transition-colors font-semibold">
                Форум
              </button>
            </div>

            <button className="hidden md:block bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-2.5 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-orange-600/50">
              Войти
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <button onClick={() => scrollToSection('news')} className="block text-gray-300 hover:text-orange-500 transition-colors font-semibold w-full text-left">
                Новости
              </button>
              <button onClick={() => scrollToSection('ranking')} className="block text-gray-300 hover:text-orange-500 transition-colors font-semibold w-full text-left">
                Рейтинг
              </button>
              <button onClick={() => scrollToSection('guides')} className="block text-gray-300 hover:text-orange-500 transition-colors font-semibold w-full text-left">
                Гайды
              </button>
              <button onClick={() => scrollToSection('streams')} className="block text-gray-300 hover:text-orange-500 transition-colors font-semibold w-full text-left">
                Стримы
              </button>
              <button onClick={() => scrollToSection('forum')} className="block text-gray-300 hover:text-orange-500 transition-colors font-semibold w-full text-left">
                Форум
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80" 
            alt="Gaming background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>
        
        <div className="relative z-10 container mx-auto text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter">
              APEX LEGENDS
            </h1>
            <p className="text-3xl md:text-4xl text-orange-500 mb-8 font-black tracking-tight">
              ХАБ ДЛЯ ОПЫТНЫХ ИГРОКОВ
            </p>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Актуальные новости, мета-отчеты, топовые сборки легенд, статистика матчей и прямые трансляции лучших игроков
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('ranking')}
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-orange-600/50 flex items-center justify-center gap-2"
              >
                Посмотреть рейтинг
                <ChevronRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('guides')}
                className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all backdrop-blur-sm border-2 border-orange-500/50 hover:border-orange-500"
              >
                Гайды и советы
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section id="news" className="py-24 px-6 bg-gradient-to-b from-transparent to-orange-950/10">
        <div className="container mx-auto">
          <motion.div
            ref={newsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: newsInView ? 1 : 0, y: newsInView ? 0 : 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-white text-center mb-4 tracking-tight">
              НОВОСТИ И <span className="text-orange-500">ОБНОВЛЕНИЯ</span>
            </h2>
            <p className="text-gray-400 text-center mb-16 text-lg">
              Последние патчи, события и изменения баланса
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-orange-900/30 hover:border-orange-600/50 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-600/20">
                <div className="bg-orange-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Activity className="w-8 h-8 text-orange-500" />
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>15 января 2024</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Патч 20.1 - Изменения баланса</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Значительные изменения для Pathfinder и Wraith. Buff для Crypto, новые мета-стратегии для ранкеда.
                </p>
                <button className="text-orange-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Читать далее
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-orange-900/30 hover:border-orange-600/50 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-600/20">
                <div className="bg-orange-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Trophy className="w-8 h-8 text-orange-500" />
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>12 января 2024</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">ALGS Championship анонсирован</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Призовой фонд $5 млн. Регистрация команд открыта. Новый формат турнира с двойной элиминацией.
                </p>
                <button className="text-orange-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Читать далее
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-orange-900/30 hover:border-orange-600/50 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-600/20">
                <div className="bg-orange-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-orange-500" />
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>10 января 2024</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Новая карта: Broken Moon</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Детальный обзор всех POI, лучшие позиции для ротаций, горячие зоны для фрагов в ранкеде.
                </p>
                <button className="text-orange-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Читать далее
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RANKING SECTION */}
      <section id="ranking" className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div
            ref={rankingRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: rankingInView ? 1 : 0, y: rankingInView ? 0 : 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-white text-center mb-4 tracking-tight">
              ТОП <span className="text-orange-500">ИГРОКОВ</span>
            </h2>
            <p className="text-gray-400 text-center mb-16 text-lg">
              Рейтинг лучших игроков по статистике и RP
            </p>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-orange-900/30 overflow-hidden">
              <div className="grid grid-cols-5 gap-4 p-6 bg-orange-600/10 border-b border-orange-900/30 font-bold text-gray-300">
                <div>Ранг</div>
                <div className="col-span-2">Игрок</div>
                <div className="text-center">RP</div>
                <div className="text-center">Винрейт</div>
              </div>

              {[
                { rank: 1, name: 'ImperialHal', rp: '45,892', winrate: '28%', icon: Trophy },
                { rank: 2, name: 'Verhulst', rp: '44,231', winrate: '26%', icon: Star },
                { rank: 3, name: 'Reps', rp: '43,567', winrate: '25%', icon: Star },
                { rank: 4, name: 'NiceWigg', rp: '42,891', winrate: '24%', icon: Shield },
                { rank: 5, name: 'Sweetdreams', rp: '42,103', winrate: '23%', icon: Shield },
              ].map((player, index) => (
                <div 
                  key={index}
                  className="grid grid-cols-5 gap-4 p-6 border-b border-gray-800/50 hover:bg-orange-600/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-2xl font-black ${index === 0 ? 'text-orange-500' : 'text-gray-400'}`}>
                      #{player.rank}
                    </span>
                  </div>
                  <div className="col-span-2 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
                      <player.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-bold">{player.name}</span>
                  </div>
                  <div className="text-center text-orange-500 font-bold flex items-center justify-center">
                    {player.rp}
                  </div>
                  <div className="text-center text-gray-300 flex items-center justify-center">
                    {player.winrate}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* GUIDES SECTION */}
      <section id="guides" className="py-24 px-6 bg-gradient-to-b from-transparent to-red-950/10">
        <div className="container mx-auto">
          <motion.div
            ref={guidesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: guidesInView ? 1 : 0, y: guidesInView ? 0 : 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-white text-center mb-4 tracking-tight">
              ГАЙДЫ И <span className="text-orange-500">СОВЕТЫ</span>
            </h2>
            <p className="text-gray-400 text-center mb-16 text-lg">
              Актуальные мета-отчеты и топовые сборки от профессионалов
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-orange-900/30 hover:border-orange-600/50 transition-all">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-orange-600/20 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart className="w-7 h-7 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Мета сезона 20</h3>
                    <p className="text-gray-500 text-sm">Обновлено 2 дня назад</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Полный разбор текущей меты: лучшие команды легенд для ранкеда, оптимальные позиции на картах, стратегии ротаций и закрытий зон.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-orange-600/20 text-orange-500 rounded-lg text-sm font-semibold">Ranked</span>
                  <span className="px-3 py-1 bg-orange-600/20 text-orange-500 rounded-lg text-sm font-semibold">Meta</span>
                  <span className="px-3 py-1 bg-orange-600/20 text-orange-500 rounded-lg text-sm font-semibold">Pro Tips</span>
                </div>
                <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-3 rounded-lg font-bold transition-all transform hover:scale-105">
                  Читать гайд
                </button>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-orange-900/30 hover:border-orange-600/50 transition-all">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-orange-600/20 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-7 h-7 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Топ-5 сборок на Wraith</h3>
                    <p className="text-gray-500 text-sm">Обновлено 3 дня назад</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Детальный гайд по Wraith: оптимальные настройки способностей, синергия с командой, агрессивные и защитные стратегии для разных ситуаций.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-orange-600/20 text-orange-500 rounded-lg text-sm font-semibold">Wraith</span>
                  <span className="px-3 py-1 bg-orange-600/20 text-orange-500 rounded-lg text-sm font-semibold">Builds</span>
                  <span className="px-3 py-1 bg-orange-600/20 text-orange-500 rounded-lg text-sm font-semibold">Advanced</span>
                </div>
                <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-3 rounded-lg font-bold transition-all transform hover:scale-105">
                  Читать гайд
                </button>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-orange-900/30 hover:border-orange-600/50 transition-all">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-orange-600/20 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-7 h-7 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Как поднять винрейт</h3>
                    <p className="text-gray-500 text-sm">Обновлено 5 дней назад</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Психология игры, принятие решений в критических ситуациях, работа в команде и коммуникация для максимизации процента побед.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-orange-600/20 text-orange-500 rounded-lg text-sm font-semibold">Strategy</span>
                  <span className="px-3 py-1 bg-orange-600/20 text-orange-500 rounded-lg text-sm font-semibold">Teamwork</span>
                  <span className="px-3 py-1 bg-orange-600/20 text-orange-500 rounded-lg text-sm font-semibold">Mindset</span>
                </div>
                <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-3 rounded-lg font-bold transition-all transform hover:scale-105">
                  Читать гайд
                </button>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-orange-900/30 hover:border-orange-600/50 transition-all">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-orange-600/20 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Защита от 3rd party</h3>
                    <p className="text-gray-500 text-sm">Обновлено неделю назад</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Как предотвратить атаки третьих команд, правильное позиционирование после файта, контроль звука и быстрое восстановление.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-orange-600/20 text-orange-500 rounded-lg text-sm font-semibold">Defense</span>
                  <span className="px-3 py-1 bg-orange-600/20 text-orange-500 rounded-lg text-sm font-semibold">Positioning</span>
                  <span className="px-3 py-1 bg-orange-600/20 text-orange-500 rounded-lg text-sm font-semibold">Tactics</span>
                </div>
                <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-3 rounded-lg font-bold transition-all transform hover:scale-105">
                  Читать гайд
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STREAMS SECTION */}
      <section id="streams" className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-white text-center mb-4 tracking-tight">
            ПРЯМЫЕ <span className="text-orange-500">ТРАНСЛЯЦИИ</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            Смотрите лучших игроков в прямом эфире
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { streamer: 'ImperialHal', viewers: '12.4K', platform: 'Twitch' },
              { streamer: 'NiceWigg', viewers: '8.2K', platform: 'YouTube' },
              { streamer: 'Verhulst', viewers: '6.8K', platform: 'Twitch' },
            ].map((stream, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-orange-900/30 hover:border-orange-600/50 transition-all overflow-hidden group">
                <div className="aspect-video bg-gradient-to-br from-orange-600/20 to-red-600/20 relative">
                  <img 
                    src={`https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80`}
                    alt="Stream preview"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-lg font-bold text-sm flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    LIVE
                  </div>
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg font-bold text-sm">
                    {stream.viewers} зрителей
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center">
                      <Youtube className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{stream.streamer}</h3>
                      <p className="text-gray-500 text-sm">{stream.platform}</p>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-3 rounded-lg font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                    Смотреть
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORUM SECTION */}
      <section id="forum" className="py-24 px-6 bg-gradient-to-b from-transparent to-orange-950/10">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-white text-center mb-4 tracking-tight">
            <span className="text-orange-500">ФОРУМ</span> СООБЩЕСТВА
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            Обсуждайте стратегии, делитесь опытом и находите команду
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Лучшие команды для ранкеда сезона 20', replies: 124, views: '2.3K', category: 'Meta Discussion', time: '2ч назад' },
              { title: 'Ищу команду для ALGS квалификации', replies: 45, views: '890', category: 'Team Search', time: '4ч назад' },
              { title: 'Гайд по новой карте Broken Moon', replies: 89, views: '1.8K', category: 'Guides', time: '6ч назад' },
              { title: 'Обсуждение патча 20.1 - ваше мнение?', replies: 203, views: '4.1K', category: 'Updates', time: '8ч назад' },
            ].map((topic, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-orange-900/30 hover:border-orange-600/50 transition-all hover:shadow-lg hover:shadow-orange-600/10">
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 bg-orange-600/20 text-orange-500 rounded-lg text-sm font-semibold">
                    {topic.category}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {topic.time}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 hover:text-orange-500 transition-colors cursor-pointer">
                  {topic.title}
                </h3>
                <div className="flex items-center gap-6 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>{topic.replies} ответов</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{topic.views} просмотров</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-orange-600/50">
              Посмотреть все темы
            </button>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80')] opacity-10 bg-cover bg-center" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                Готовы стать лучше?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Присоединяйтесь к тысячам игроков. Получите доступ ко всем гайдам, статистике и эксклюзивному контенту!
              </p>
              <button className="bg-white hover:bg-gray-100 text-orange-600 px-12 py-5 rounded-xl text-xl font-bold transition-all transform hover:scale-105 shadow-2xl">
                Начать сейчас
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-orange-900/30 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-3">
              <Target className="w-8 h-8 text-orange-500" />
              <div>
                <span className="text-2xl font-black text-white tracking-tight">APEX</span>
                <span className="text-2xl font-black text-orange-500 tracking-tight">HUB</span>
              </div>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <MessageSquare className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="text-center text-gray-500 text-sm mt-8">
            © 2024 ApexHub. Фан-сайт Apex Legends. Не аффилирован с EA или Respawn Entertainment.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App