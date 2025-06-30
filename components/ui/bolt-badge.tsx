'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function BoltBadge() {
  return (
    <Link href="/bolt.new">
      <div className="fixed top-4 right-4 z-50 cursor-pointer">
        <Image
          src="/bolt.png"
          alt="Bolt"
          width={32}
          height={32}
          className="hover:scale-110 transition-transform duration-200"
        />
      </div>
    </Link>
  );
}
