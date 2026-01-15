import { Target, Trophy, Users, TrendingUp, Shield, Star, Calendar, MessageSquare, Youtube, ChevronRight, BarChart, Activity, Zap, Award, Menu, X } from 'lucide-react'
import { useState } from 'react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-red-950">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-xl z-50 border-b border-red-600/30">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-red-600 to-orange-500 p-2 rounded-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">APEX HUB</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('news')} className="text-gray-300 hover:text-red-500 transition-colors font-semibold">Новости</button>
              <button onClick={() => scrollToSection('guides')} className="text-gray-300 hover:text-red-500 transition-colors font-semibold">Гайды</button>
              <button onClick={() => scrollToSection('leaderboard')} className="text-gray-300 hover:text-red-500 transition-colors font-semibold">Рейтинг</button>
              <button onClick={() => scrollToSection('streams')} className="text-gray-300 hover:text-red-500 transition-colors font-semibold">Стримы</button>
              <button onClick={() => scrollToSection('forum')} className="text-gray-300 hover:text-red-500 transition-colors font-semibold">Форум</button>
            </div>

            <button className="hidden md:block bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white px-6 py-2 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-red-600/50">
              Войти
            </button>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <button onClick={() => scrollToSection('news')} className="block w-full text-left text-gray-300 hover:text-red-500 transition-colors font-semibold py-2">Новости</button>
              <button onClick={() => scrollToSection('guides')} className="block w-full text-left text-gray-300 hover:text-red-500 transition-colors font-semibold py-2">Гайды</button>
              <button onClick={() => scrollToSection('leaderboard')} className="block w-full text-left text-gray-300 hover:text-red-500 transition-colors font-semibold py-2">Рейтинг</button>
              <button onClick={() => scrollToSection('streams')} className="block w-full text-left text-gray-300 hover:text-red-500 transition-colors font-semibold py-2">Стримы</button>
              <button onClick={() => scrollToSection('forum')} className="block w-full text-left text-gray-300 hover:text-red-500 transition-colors font-semibold py-2">Форум</button>
            </div>
          )}
        </nav>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80" 
            alt="Apex Legends" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-red-950/50 to-black" />
        </div>
        <div className="relative z-10 container mx-auto text-center py-20">
          <div className="inline-block bg-red-600/20 backdrop-blur-sm border border-red-500/50 px-6 py-2 rounded-full mb-6">
            <span className="text-red-400 font-bold text-sm tracking-wider">СЕЗОН 20 • ПРОРЫВ</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter">
            APEX LEGENDS
          </h1>
          <p className="text-2xl md:text-4xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent mb-8 font-black">
            Твой путь к вершине
          </p>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Актуальные новости, профессиональные гайды, статистика матчей и рейтинги лучших игроков. Всё для опытных бойцов арены.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('guides')} className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white px-10 py-4 rounded-xl text-lg font-black transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl shadow-red-600/50">
              Изучить гайды
              <ChevronRight className="w-5 h-5" />
            </button>
            <button onClick={() => scrollToSection('leaderboard')} className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-xl text-lg font-black transition-all backdrop-blur-sm border-2 border-white/20 hover:border-red-500/50">
              Посмотреть рейтинг
            </button>
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section id="news" className="py-20 px-6 bg-gradient-to-b from-transparent to-red-950/20">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Calendar className="w-10 h-10 text-red-500" />
            <h2 className="text-5xl font-black text-white">
              Новости и <span className="text-red-500">обновления</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-red-600/30 hover:border-red-500/70 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-red-600/30">
              <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">ОБНОВЛЕНИЕ</div>
              <h3 className="text-2xl font-bold text-white mb-3">Патч 20.1 уже здесь</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Балансировка легенд, новые скины и улучшения производительности. Catalyst получила бафф способностей.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">2 часа назад</span>
                <ChevronRight className="w-5 h-5 text-red-500" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-orange-600/30 hover:border-orange-500/70 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-600/30">
              <div className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">СОБЫТИЕ</div>
              <h3 className="text-2xl font-bold text-white mb-3">Коллекционное событие</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Новая коллекция из 24 предметов и эксклюзивный скин на наследие для Bangalore. Ограниченное время!
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">5 часов назад</span>
                <ChevronRight className="w-5 h-5 text-orange-500" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-yellow-600/30 hover:border-yellow-500/70 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-600/30">
              <div className="bg-yellow-600 text-black text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">ТУРНИР</div>
              <h3 className="text-2xl font-bold text-white mb-3">ALGS Championship</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Финал глобальной серии уже в эти выходные. 40 команд сразятся за $2,000,000 призового фонда.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">1 день назад</span>
                <ChevronRight className="w-5 h-5 text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDES SECTION */}
      <section id="guides" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Target className="w-10 h-10 text-orange-500" />
            <h2 className="text-5xl font-black text-white">
              Гайды для <span className="text-orange-500">профи</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-900/90 to-black p-6 rounded-xl border border-red-600/20 hover:border-red-500/50 transition-all group cursor-pointer">
              <div className="bg-red-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition-all">
                <Shield className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Мета легенд S20</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Топ-5 легенд текущего сезона и оптимальные составы команд
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/90 to-black p-6 rounded-xl border border-orange-600/20 hover:border-orange-500/50 transition-all group cursor-pointer">
              <div className="bg-orange-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600/30 transition-all">
                <Zap className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Ротации и позиции</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Оптимальные пути движения по карте и контроль зон
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/90 to-black p-6 rounded-xl border border-yellow-600/20 hover:border-yellow-500/50 transition-all group cursor-pointer">
              <div className="bg-yellow-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-600/30 transition-all">
                <Target className="w-7 h-7 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Прицеливание</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Настройки чувствительности и тренировки для точной стрельбы
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/90 to-black p-6 rounded-xl border border-purple-600/20 hover:border-purple-500/50 transition-all group cursor-pointer">
              <div className="bg-purple-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600/30 transition-all">
                <Activity className="w-7 h-7 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Анализ боя</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Разбор типичных ошибок и как их избежать в рейтинге
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERBOARD */}
      <section id="leaderboard" className="py-20 px-6 bg-gradient-to-b from-red-950/20 to-transparent">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Trophy className="w-10 h-10 text-yellow-500" />
            <h2 className="text-5xl font-black text-white">
              Рейтинг <span className="text-yellow-500">игроков</span>
            </h2>
          </div>
          <div className="bg-gradient-to-br from-gray-900/90 to-black rounded-2xl border border-yellow-600/30 overflow-hidden">
            <div className="grid grid-cols-4 gap-4 bg-yellow-600/10 p-6 border-b border-yellow-600/20 font-bold text-yellow-500 text-sm">
              <div>МЕСТО</div>
              <div>ИГРОК</div>
              <div className="text-center">RP</div>
              <div className="text-right">РАНГ</div>
            </div>
            
            {[
              { rank: 1, name: 'ImperialHal', rp: '52,847', tier: 'Predator #1', color: 'text-red-500' },
              { rank: 2, name: 'Verhulst', rp: '51,234', tier: 'Predator #2', color: 'text-red-500' },
              { rank: 3, name: 'Reps', rp: '50,891', tier: 'Predator #3', color: 'text-red-500' },
              { rank: 4, name: 'NiceWigg', rp: '49,567', tier: 'Predator #12', color: 'text-purple-500' },
              { rank: 5, name: 'Genburten', rp: '48,923', tier: 'Predator #18', color: 'text-purple-500' },
            ].map((player) => (
              <div key={player.rank} className="grid grid-cols-4 gap-4 p-6 border-b border-gray-800/50 hover:bg-white/5 transition-all">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg ${player.rank <= 3 ? 'bg-yellow-600/20' : 'bg-gray-800'} flex items-center justify-center font-black ${player.rank <= 3 ? 'text-yellow-500' : 'text-gray-500'}`}>
                    {player.rank}
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-white font-bold">{player.name}</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className={`font-black ${player.color}`}>{player.rp}</span>
                </div>
                <div className="flex items-center justify-end">
                  <span className="text-gray-400 text-sm">{player.tier}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE STREAMS */}
      <section id="streams" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Youtube className="w-10 h-10 text-red-600" />
            <h2 className="text-5xl font-black text-white">
              Прямые <span className="text-red-600">трансляции</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="https://www.youtube.com/watch?v=JarukT-Kog4" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-red-600/30 hover:border-red-500/70 transition-all overflow-hidden transform hover:scale-105 hover:shadow-2xl hover:shadow-red-600/30">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&q=80" 
                    alt="NiceWigg Stream" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    LIVE
                  </div>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <Youtube className="w-16 h-16 text-white opacity-80" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">NiceWigg</h3>
                  <p className="text-gray-400 text-sm mb-3">Ranked грind до Predator | !команда !настройки</p>
                  <div className="flex items-center gap-2 text-red-500 text-sm font-semibold">
                    <Users className="w-4 h-4" />
                    <span>12,847 зрителей</span>
                  </div>
                </div>
              </div>
            </a>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-purple-600/30 hover:border-purple-500/70 transition-all overflow-hidden transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-600/30 cursor-pointer">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800&q=80" 
                  alt="ImperialHal Stream" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  LIVE
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">ImperialHal</h3>
                <p className="text-gray-400 text-sm mb-3">Scrims с TSM | Подготовка к турниру ALGS</p>
                <div className="flex items-center gap-2 text-purple-500 text-sm font-semibold">
                  <Users className="w-4 h-4" />
                  <span>18,432 зрителя</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-orange-600/30 hover:border-orange-500/70 transition-all overflow-hidden transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-600/30 cursor-pointer">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80" 
                  alt="Verhulst Stream" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  LIVE
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Verhulst</h3>
                <p className="text-gray-400 text-sm mb-3">Chill ranked | Тестирую новую мету</p>
                <div className="flex items-center gap-2 text-orange-500 text-sm font-semibold">
                  <Users className="w-4 h-4" />
                  <span>9,234 зрителя</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-red-950/20">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <BarChart className="w-10 h-10 text-blue-500" />
            <h2 className="text-5xl font-black text-white">
              Статистика <span className="text-blue-500">матчей</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-900/30 to-black p-8 rounded-2xl border border-blue-600/30 text-center">
              <TrendingUp className="w-10 h-10 text-blue-500 mx-auto mb-4" />
              <div className="text-4xl font-black text-white mb-2">2.47</div>
              <div className="text-gray-400 text-sm">K/D Ratio</div>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-black p-8 rounded-2xl border border-green-600/30 text-center">
              <Award className="w-10 h-10 text-green-500 mx-auto mb-4" />
              <div className="text-4xl font-black text-white mb-2">847</div>
              <div className="text-gray-400 text-sm">Побед</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-black p-8 rounded-2xl border border-purple-600/30 text-center">
              <Star className="w-10 h-10 text-purple-500 mx-auto mb-4" />
              <div className="text-4xl font-black text-white mb-2">12.8K</div>
              <div className="text-gray-400 text-sm">Урона за игру</div>
            </div>
            <div className="bg-gradient-to-br from-red-900/30 to-black p-8 rounded-2xl border border-red-600/30 text-center">
              <Target className="w-10 h-10 text-red-500 mx-auto mb-4" />
              <div className="text-4xl font-black text-white mb-2">38%</div>
              <div className="text-gray-400 text-sm">Точность</div>
            </div>
          </div>
        </div>
      </section>

      {/* FORUM PREVIEW */}
      <section id="forum" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <MessageSquare className="w-10 h-10 text-green-500" />
            <h2 className="text-5xl font-black text-white">
              Форум <span className="text-green-500">сообщества</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-green-600/20 hover:border-green-500/50 transition-all cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="bg-green-600/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-green-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">Лучшие настройки для Catalyst в S20</h3>
                  <p className="text-gray-400 text-sm mb-3">Делюсь своими настройками и тактиками игры за Catalyst после последнего баффа...</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      234 ответа
                    </span>
                    <span>3 часа назад</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-blue-600/20 hover:border-blue-500/50 transition-all cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">Мета оружия: что выбрать?</h3>
                  <p className="text-gray-400 text-sm mb-3">Обсуждаем текущую мету оружия. R-301 или Flatline? CAR SMG или Volt?...</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      512 ответов
                    </span>
                    <span>5 часов назад</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-purple-600/20 hover:border-purple-500/50 transition-all cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-6 h-6 text-purple-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">Поиск команды для рейтинга</h3>
                  <p className="text-gray-400 text-sm mb-3">Diamond+ игроки, ищем третьего в состав для пуша до Predator...</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      89 ответов
                    </span>
                    <span>1 день назад</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-orange-600/20 hover:border-orange-500/50 transition-all cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="bg-orange-600/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-orange-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">Гайд по ротациям на новой карте</h3>
                  <p className="text-gray-400 text-sm mb-3">Детальный разбор оптимальных путей и позиций на обновленной карте...</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      367 ответов
                    </span>
                    <span>2 дня назад</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-600 via-orange-500 to-red-600">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-black text-white mb-6">
            Готов к <span className="text-black">победе?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-semibold">
            Присоединяйся к сообществу опытных игроков. Получай эксклюзивные гайды и статистику!
          </p>
          <button className="bg-black hover:bg-gray-900 text-white px-12 py-5 rounded-xl text-xl font-black transition-all transform hover:scale-105 shadow-2xl">
            Начать сейчас
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-red-600/30 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="bg-gradient-to-br from-red-600 to-orange-500 p-2 rounded-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-black text-white">APEX HUB</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm">
            © 2024 Apex Hub. Неофициальный фан-сайт. Все права на Apex Legends принадлежат Respawn Entertainment и Electronic Arts.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App