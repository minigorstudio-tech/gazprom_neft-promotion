export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4" data-testid="text-footer-contacts-title">
              Контакты
            </h3>
            <div className="space-y-2 text-white/80">
              <p data-testid="text-footer-phone">8 (800) 700-51-51</p>
              <p data-testid="text-footer-email">hi@gpnbonus.ru</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4" data-testid="text-footer-program-title">
              Программа
            </h3>
            <div className="space-y-2 text-white/80">
              <p data-testid="text-footer-program-name">Нам по Пути</p>
              <p data-testid="text-footer-program-site">gpnbonus.ru</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4" data-testid="text-footer-company-title">
              О компании
            </h3>
            <div className="space-y-2 text-white/80">
              <p data-testid="text-footer-company-name">ПАО «Газпром нефть»</p>
              <p data-testid="text-footer-company-site">gpnbonus.ru</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
          <p data-testid="text-footer-copyright">
            © 2026 ПАО «Газпром нефть». Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
