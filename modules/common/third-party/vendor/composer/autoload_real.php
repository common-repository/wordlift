<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitdfa501c6e5f181f14bf3ca6f0583434e
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Wordlift_Modules_Common_Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Wordlift_Modules_Common_Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInitdfa501c6e5f181f14bf3ca6f0583434e', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Wordlift_Modules_Common_Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitdfa501c6e5f181f14bf3ca6f0583434e', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Wordlift_Modules_Common_Composer\Autoload\ComposerStaticInitdfa501c6e5f181f14bf3ca6f0583434e::getInitializer($loader));

        $loader->setClassMapAuthoritative(true);
        $loader->register(true);

        return $loader;
    }
}