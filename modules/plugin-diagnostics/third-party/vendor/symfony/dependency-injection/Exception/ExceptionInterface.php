<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace Wordlift\Modules\Plugin_Diagnostics\Symfony\Component\DependencyInjection\Exception;

use Wordlift\Modules\Plugin_Diagnostics\Psr\Container\ContainerExceptionInterface;
/**
 * Base ExceptionInterface for Dependency Injection component.
 *
 * @author Fabien Potencier <fabien@symfony.com>
 * @author Bulat Shakirzyanov <bulat@theopenskyproject.com>
 */
interface ExceptionInterface extends ContainerExceptionInterface
{
}
