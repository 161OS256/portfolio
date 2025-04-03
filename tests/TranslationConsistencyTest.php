<?php
use Symfony\Component\Yaml\Yaml;

class TranslationConsistencyTest extends \PHPUnit\Framework\TestCase
{
    private $plTranslations;
    private $enTranslations;

    protected function setUp(): void
    {
        // Wczytanie plików YAML do tablic
        $this->plTranslations = Yaml::parseFile(__DIR__ . '/../translations/messages.pl.yaml');
        $this->enTranslations = Yaml::parseFile(__DIR__ . '/../translations/messages.en.yaml');
    }

    public function testTranslationFilesConsistency()
    {
        $plKeys = $this->getAllKeys($this->plTranslations);
        $enKeys = $this->getAllKeys($this->enTranslations);
    
        // Debugowanie, co dokładnie jest różne
        $missingInPl = array_diff($enKeys, $plKeys);
        $missingInEn = array_diff($plKeys, $enKeys);

        echo "Klucze w pliku polskim: ";
        var_dump($missingInPl);
        
        echo "Klucze w pliku angielskim:";
        var_dump($missingInEn);
    
        // Test: Brakujące klucze w pliku polskim
        $this->assertEmpty($missingInPl, 'Brakuje kluczy w pliku tłumaczenia dla języka polskiego: ' . implode(', ', $missingInPl));
        // Test: Brakujące klucze w pliku angielskim
        $this->assertEmpty($missingInEn, 'Brakuje kluczy w pliku tłumaczenia dla języka angielskiego: ' . implode(', ', $missingInEn));
    }
    
    // Funkcja do rekurencyjnego zbierania wszystkich kluczy z tablicy
    private function getAllKeys(array $array, $prefix = '')
    {
        $keys = [];
        foreach ($array as $key => $value) {
            $newKey = $prefix ? $prefix . '.' . $key : $key;
            if (is_array($value)) {
                $keys = array_merge($keys, $this->getAllKeys($value, $newKey));
            } else {
                $keys[] = $newKey;
            }
        }
        return $keys;
    }
}
