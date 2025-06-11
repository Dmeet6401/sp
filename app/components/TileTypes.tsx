'use client';

import { useEffect, useState } from 'react';
import { getTileTypes, TileType } from '../services/api';

export default function TileTypes() {
  const [tileTypes, setTileTypes] = useState<TileType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTileTypes = async () => {
      try {
        const data = await getTileTypes();
        setTileTypes(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch tile types');
        setLoading(false);
      }
    };

    fetchTileTypes();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center min-h-[200px]">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {tileTypes.map((tileType) => (
        <div
          key={tileType._id}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <h3 className="text-xl font-semibold mb-2">{tileType.name}</h3>
          {tileType.description && (
            <p className="text-gray-600">{tileType.description}</p>
          )}
        </div>
      ))}
    </div>
  );
} 