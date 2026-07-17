import BadgeDollarSign from 'lucide-icons-qwik/icons/BadgeDollarSign';
import FlameKindling from 'lucide-icons-qwik/icons/FlameKindling';
import RefreshCw from 'lucide-icons-qwik/icons/RefreshCw';
import Scale from 'lucide-icons-qwik/icons/Scale';
import Shield from 'lucide-icons-qwik/icons/Shield';
import Smile from 'lucide-icons-qwik/icons/Smile';
import Store from 'lucide-icons-qwik/icons/Store';
import Users2 from 'lucide-icons-qwik/icons/Users2';
import SiDiscord from 'simple-icons-qwik/icons/SiDiscord';
import { discordLink } from '../Nav';
import { Card } from './Why';
import { Birdflop } from '@luminescent/icons-qwik';

export default [
  {
    icon: Smile,
    title: 'Friendly Staff',
    description:
      'We make sure that our staff have played on the server for a long time so that they are knowledgeable. Only the very best are selected.',
  },
  {
    icon: RefreshCw,
    title: 'Quick Updates',
    description:
      'Acorn is always one of the first servers to update to the newest version of Minecraft. We updated to 1.15 on the day of its release.',
  },
  {
    icon: Users2,
    title: 'Active Community',
    description:
      'We have an active community who is always willing to help out.',
    buttons: [
      {
        icon: SiDiscord,
        text: 'Discord',
        href: discordLink,
      },
    ],
  },
  {
    icon: Shield,
    title: 'Anti Grief',
    description:
      'With our grief and theft prevention tools, we ensure that all players can have fun on Acorn without the fear of losing their builds.',
    buttons: [
      {
        icon: Scale,
        text: 'Rules',
        href: '/rules',
      },
    ],
  },
  {
    icon: BadgeDollarSign,
    title: 'Player-Driven Economy',
    description:
      'On Acorn, we let players create their own shops and sell their items for their own price.',
    buttons: [
      {
        icon: Store,
        text: 'Shops',
        href: '/shops',
      },
    ],
  },
  {
    icon: FlameKindling,
    title: 'Survival',
    description:
      "Acorn is a survival server with minimal plugins to allow for an enjoyable multiplayer experience. We're sponsored by Birdflop to ensure experiences are lag-free",
    buttons: [
      {
        icon: Birdflop,
        text: 'Birdflop',
        href: 'https://birdflop.com',
      },
    ],
  },
] as Card[];
