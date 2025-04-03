<?php
// tests/TranslationConsistencyTest.php
namespace App\Tests;

use PHPUnit\Framework\TestCase;
use Symfony\Component\Translation\Translator;
use Symfony\Component\Translation\Loader\YamlFileLoader;
use Symfony\Component\Translation\Writer\TranslationWriter;

class TranslationConsistencyTest extends TestCase
{
    private $translator;

    protected function setUp(): void
    {
        // Tworzymy instancję tłumacza
        $this->translator = new Translator('en'); // Domyślny język to angielski
        $this->translator->addLoader('yaml', new YamlFileLoader());

        // Ładujemy pliki tłumaczeń
        $this->translator->addResource('yaml', __DIR__.'/../translations/messages.pl.yaml', 'pl');
        $this->translator->addResource('yaml', __DIR__.'/../translations/messages.en.yaml', 'en');
    }

    public function testTranslationFilesConsistency()
    {
        // Pobieramy klucze tłumaczeń z obu plików
        $plCatalog = $this->getTranslationCatalog('pl');
        $enCatalog = $this->getTranslationCatalog('en');

        // Sprawdzamy, czy klucze są spójne między plikiem PL i EN
        $missingInPl = array_diff_key($enCatalog, $plCatalog);
        $missingInEn = array_diff_key($plCatalog, $enCatalog);

        // Jeśli którykolwiek z tych zbiorów nie jest pusty, test się nie powiedzie
        $this->assertEmpty($missingInPl, "Brakuje kluczy w pliku tłumaczenia PL: " . implode(", ", array_keys($missingInPl)));
        $this->assertEmpty($missingInEn, "Brakuje kluczy w pliku tłumaczenia EN: " . implode(", ", array_keys($missingInEn)));
    }

    private function getTranslationCatalog(string $locale): array
    {
        // Pobiera wszystkie klucze tłumaczeń dla danego języka
        $catalog = $this->translator->getCatalogue($locale);
        return $catalog->all();
    }
}
