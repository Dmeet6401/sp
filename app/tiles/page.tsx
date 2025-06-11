"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface TileType {
  id: string;
  name: string;
}

interface TileSize {
  id: string;
  width: number;
  height: number;
  type: string;
}

interface Tile {
  id: string;
  name: string;
  type: string;
  size: string;
  description: string;
  imageUrl?: string;
}

export default function TilesPage() {
  const router = useRouter();
  const [tileTypes, setTileTypes] = useState<TileType[]>([]);
  const [tileSizes, setTileSizes] = useState<TileSize[]>([]);
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [imageError, setImageError] = useState("");

  // Form states
  const [newTileType, setNewTileType] = useState("");
  const [newTileSize, setNewTileSize] = useState({ width: "", height: "", type: "" });
  const [newTile, setNewTile] = useState({
    name: "",
    type: "",
    size: "",
    description: "",
    imageUrl: "",
  });
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImageError("");

    if (file) {
      // Check file type
      if (!file.type.match(/^image\/(jpeg|jpg)$/)) {
        setImageError("Please upload only JPG/JPEG images");
        e.target.value = "";
        return;
      }

      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setImageError("Image size should be less than 5MB");
        e.target.value = "";
        return;
      }

      setSelectedImage(file);
      // Create a temporary URL for preview
      const imageUrl = URL.createObjectURL(file);
      setNewTile({ ...newTile, imageUrl });
    }
  };

  const handleAddTileType = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTileType.trim()) return;

    const newType: TileType = {
      id: Date.now().toString(),
      name: newTileType,
    };

    setTileTypes([...tileTypes, newType]);
    setNewTileType("");
  };

  const handleAddTileSize = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTileSize.width || !newTileSize.height || !newTileSize.type) return;

    const newSize: TileSize = {
      id: Date.now().toString(),
      width: Number(newTileSize.width),
      height: Number(newTileSize.height),
      type: newTileSize.type,
    };

    setTileSizes([...tileSizes, newSize]);
    setNewTileSize({ width: "", height: "", type: "" });
  };

  const handleAddTile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTile.name || !newTile.type || !newTile.size || !selectedImage) return;

    // Here you would typically upload the image to your server/storage
    // and get back a URL. For now, we'll use the temporary URL
    const newTileItem: Tile = {
      id: Date.now().toString(),
      ...newTile,
    };

    setTiles([...tiles, newTileItem]);
    setNewTile({
      name: "",
      type: "",
      size: "",
      description: "",
      imageUrl: "",
    });
    setSelectedImage(null);

    // Navigate to the upload tiles page
    router.push("/upload-tiles-for-star-porselano");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Tile Management</h1>
      
      <Tabs defaultValue="types" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="types">Tile Types</TabsTrigger>
          <TabsTrigger value="sizes">Tile Sizes</TabsTrigger>
          <TabsTrigger value="tiles">Tiles</TabsTrigger>
        </TabsList>

        <TabsContent value="types">
          <Card>
            <CardHeader>
              <CardTitle>Add Tile Type</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddTileType} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="tileType">Tile Type Name</Label>
                  <Input
                    id="tileType"
                    value={newTileType}
                    onChange={(e) => setNewTileType(e.target.value)}
                    placeholder="Enter tile type name"
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full">Add Tile Type</Button>
              </form>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Existing Tile Types</h3>
                <div className="grid gap-2">
                  {tileTypes.map((type) => (
                    <div key={type.id} className="p-3 bg-secondary rounded-lg flex justify-between items-center">
                      <span>{type.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sizes">
          <Card>
            <CardHeader>
              <CardTitle>Add Tile Size</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddTileSize} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="tileType">Tile Type</Label>
                  <select
                    className="w-full p-2 border rounded-lg bg-background"
                    value={newTileSize.type}
                    onChange={(e) => setNewTileSize({ ...newTileSize, type: e.target.value })}
                  >
                    <option value="">Select Tile Type</option>
                    {tileTypes.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="width">Width (cm)</Label>
                    <Input
                      id="width"
                      type="number"
                      value={newTileSize.width}
                      onChange={(e) => setNewTileSize({ ...newTileSize, width: e.target.value })}
                      placeholder="Width"
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      value={newTileSize.height}
                      onChange={(e) => setNewTileSize({ ...newTileSize, height: e.target.value })}
                      placeholder="Height"
                      className="w-full"
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full">Add Tile Size</Button>
              </form>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Existing Tile Sizes</h3>
                <div className="grid gap-2">
                  {tileSizes.map((size) => (
                    <div key={size.id} className="p-3 bg-secondary rounded-lg flex justify-between items-center">
                      <span>{size.width}cm x {size.height}cm</span>
                      <span className="text-sm text-muted-foreground">
                        Type: {tileTypes.find(t => t.id === size.type)?.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tiles">
          <Card>
            <CardHeader>
              <CardTitle>Add Tile</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddTile} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="tileName">Tile Name</Label>
                  <Input
                    id="tileName"
                    value={newTile.name}
                    onChange={(e) => setNewTile({ ...newTile, name: e.target.value })}
                    placeholder="Enter tile name"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tileType">Tile Type</Label>
                  <select
                    className="w-full p-2 border rounded-lg bg-background"
                    value={newTile.type}
                    onChange={(e) => setNewTile({ ...newTile, type: e.target.value })}
                  >
                    <option value="">Select Tile Type</option>
                    {tileTypes.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tileSize">Tile Size</Label>
                  <select
                    className="w-full p-2 border rounded-lg bg-background"
                    value={newTile.size}
                    onChange={(e) => setNewTile({ ...newTile, size: e.target.value })}
                  >
                    <option value="">Select Tile Size</option>
                    {tileSizes
                      .filter((size) => size.type === newTile.type)
                      .map((size) => (
                        <option key={size.id} value={size.id}>
                          {size.width}cm x {size.height}cm
                        </option>
                      ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    value={newTile.description}
                    onChange={(e) => setNewTile({ ...newTile, description: e.target.value })}
                    placeholder="Enter tile description"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image">Tile Image (JPG/JPEG only)</Label>
                  <Input
                    id="image"
                    type="file"
                    accept=".jpg,.jpeg"
                    onChange={handleImageChange}
                    className="w-full"
                  />
                  {imageError && (
                    <p className="text-sm text-red-500">{imageError}</p>
                  )}
                  {newTile.imageUrl && (
                    <div className="mt-2 relative w-40 h-40">
                      <Image
                        src={newTile.imageUrl}
                        alt="Tile preview"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  )}
                </div>

                <Button type="submit" className="w-full" disabled={!selectedImage}>
                  Add Tile
                </Button>
              </form>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Existing Tiles</h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {tiles.map((tile) => (
                    <div key={tile.id} className="p-4 bg-secondary rounded-lg space-y-3">
                      {tile.imageUrl && (
                        <div className="relative w-full h-48">
                          <Image
                            src={tile.imageUrl}
                            alt={tile.name}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold">{tile.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          Type: {tileTypes.find(t => t.id === tile.type)?.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Size: {
                            (() => {
                              const size = tileSizes.find(s => s.id === tile.size);
                              return size ? `${size.width}cm x ${size.height}cm` : "N/A";
                            })()
                          }
                        </p>
                        {tile.description && (
                          <p className="text-sm mt-2">{tile.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 