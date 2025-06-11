"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import { Pencil, Trash2, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface TileType {
  id: string;
  name: string;
}

interface TileSize {
  id: string;
  size: string;
}

interface Tile {
  id: string;
  name: string;
  type: string;
  size: string;
  description: string;
  image?: File;
}

export default function TilesPage() {
  const { toast } = useToast();
  const [tileTypes, setTileTypes] = useState<TileType[]>([
    { id: "1", name: "Porcelain" },
    { id: "2", name: "Ceramic" },
    { id: "3", name: "Natural Stone" },
  ]);
  const [tileSizes, setTileSizes] = useState<TileSize[]>([
    { id: "1", size: "300 x 300" },
    { id: "2", size: "600 x 600" },
    { id: "3", size: "800 x 800" },
  ]);
  const [tiles, setTiles] = useState<Tile[]>([
    {
      id: "1",
      name: "Classic White Porcelain",
      type: "1",
      size: "1",
      description: "Elegant white porcelain tile with a matte finish",
    },
    {
      id: "2",
      name: "Natural Stone Grey",
      type: "3",
      size: "2",
      description: "Natural stone-look tile in grey color",
    },
    {
      id: "3",
      name: "Modern Ceramic Black",
      type: "2",
      size: "3",
      description: "Modern black ceramic tile with a glossy finish",
    },
  ]);

  const [newTileType, setNewTileType] = useState("");
  const [newTileSize, setNewTileSize] = useState("");
  const [newTile, setNewTile] = useState<{
    name: string;
    type: string;
    size: string;
    description: string;
    image?: File;
  }>({
    name: "",
    type: "",
    size: "",
    description: "",
    image: undefined,
  });

  // Edit mode states
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  // Delete confirmation state
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{ type: 'tileType' | 'tileSize' | 'tile'; id: string } | null>(null);

  const resetForm = () => {
    setNewTileType("");
    setNewTileSize("");
    setNewTile({
      name: "",
      type: "",
      size: "",
      description: "",
      image: undefined,
    });
    setEditMode(false);
    setEditId(null);
  };

  const handleEdit = (type: 'tileType' | 'tileSize' | 'tile', id: string) => {
    setEditMode(true);
    setEditId(id);

    switch (type) {
      case 'tileType':
        const tileType = tileTypes.find(t => t.id === id);
        if (tileType) {
          setNewTileType(tileType.name);
        }
        break;
      case 'tileSize':
        const tileSize = tileSizes.find(s => s.id === id);
        if (tileSize) {
          setNewTileSize(tileSize.size);
        }
        break;
      case 'tile':
        const tile = tiles.find(t => t.id === id);
        if (tile) {
          setNewTile({
            name: tile.name,
            type: tile.type,
            size: tile.size,
            description: tile.description,
            image: tile.image,
          });
        }
        break;
    }
  };

  const handleAddTileType = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTileType.trim()) return;

    if (editMode && editId) {
      setTileTypes(tileTypes.map(type => 
        type.id === editId ? { ...type, name: newTileType } : type
      ));
      toast({
        title: "Success",
        description: "Tile type updated successfully",
      });
    } else {
      const newType: TileType = {
        id: Date.now().toString(),
        name: newTileType,
      };
      setTileTypes([...tileTypes, newType]);
      toast({
        title: "Success",
        description: "Tile type added successfully",
      });
    }
    resetForm();
  };

  const handleAddTileSize = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTileSize.trim()) return;

    if (editMode && editId) {
      setTileSizes(tileSizes.map(size => 
        size.id === editId ? { ...size, size: newTileSize } : size
      ));
      toast({
        title: "Success",
        description: "Tile size updated successfully",
      });
    } else {
      const newSize: TileSize = {
        id: Date.now().toString(),
        size: newTileSize,
      };
      setTileSizes([...tileSizes, newSize]);
      toast({
        title: "Success",
        description: "Tile size added successfully",
      });
    }
    resetForm();
  };

  const handleAddTile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTile.name || !newTile.type || !newTile.size) return;

    if (editMode && editId) {
      setTiles(tiles.map(tile => 
        tile.id === editId ? { ...tile, ...newTile } : tile
      ));
      toast({
        title: "Success",
        description: "Tile updated successfully",
      });
    } else {
      const newTileItem: Tile = {
        id: Date.now().toString(),
        ...newTile,
      };
      setTiles([...tiles, newTileItem]);
      toast({
        title: "Success",
        description: "Tile added successfully",
      });
    }
    resetForm();
  };

  const handleDelete = () => {
    if (!itemToDelete) return;

    switch (itemToDelete.type) {
      case 'tileType':
        setTileTypes(tileTypes.filter(type => type.id !== itemToDelete.id));
        break;
      case 'tileSize':
        setTileSizes(tileSizes.filter(size => size.id !== itemToDelete.id));
        break;
      case 'tile':
        setTiles(tiles.filter(tile => tile.id !== itemToDelete.id));
        break;
    }

    toast({
      title: "Success",
      description: `${itemToDelete.type === 'tileType' ? 'Tile type' : itemToDelete.type === 'tileSize' ? 'Tile size' : 'Tile'} deleted successfully`,
      variant: "destructive",
    });
    setDeleteConfirmOpen(false);
    setItemToDelete(null);
  };

  const confirmDelete = (type: 'tileType' | 'tileSize' | 'tile', id: string) => {
    setItemToDelete({ type, id });
    setDeleteConfirmOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=400&width=1200"
            alt="Tile Management Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Tile Management</h1>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
          <nav className="text-blue-200">
            <Link href="/" className="hover:text-white cursor-pointer">
              HOME
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white">TILE MANAGEMENT</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="types" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="types">Tile Types</TabsTrigger>
              <TabsTrigger value="sizes">Tile Sizes</TabsTrigger>
              <TabsTrigger value="tiles">Tiles</TabsTrigger>
            </TabsList>

            <TabsContent value="types">
              <Card>
                <CardHeader>
                  <CardTitle>{editMode ? 'Edit' : 'Add'} Tile Type</CardTitle>
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
                    <div className="flex gap-2">
                      <Button type="submit" className="flex-1">
                        {editMode ? 'Update' : 'Add'} Tile Type
                      </Button>
                      {editMode && (
                        <Button type="button" variant="outline" onClick={resetForm}>
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </form>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Existing Tile Types</h3>
                    <div className="grid gap-3">
                      {tileTypes.map((type) => (
                        <div key={type.id} className="p-4 bg-gray-50 rounded-lg flex justify-between items-center hover:bg-gray-100 transition-colors">
                          <span className="font-medium">{type.name}</span>
                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleEdit('tileType', type.id)}
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                              onClick={() => confirmDelete('tileType', type.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
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
                  <CardTitle>{editMode ? 'Edit' : 'Add'} Tile Size</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddTileSize} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="tileSize">Tile Size (e.g. 300 x 300)</Label>
                      <Input
                        id="tileSize"
                        value={newTileSize}
                        onChange={(e) => setNewTileSize(e.target.value)}
                        placeholder="Enter tile size"
                        className="w-full"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button type="submit" className="flex-1">
                        {editMode ? 'Update' : 'Add'} Tile Size
                      </Button>
                      {editMode && (
                        <Button type="button" variant="outline" onClick={resetForm}>
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </form>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Existing Tile Sizes</h3>
                    <div className="grid gap-3">
                      {tileSizes.map((size) => (
                        <div key={size.id} className="p-4 bg-gray-50 rounded-lg flex justify-between items-center hover:bg-gray-100 transition-colors">
                          <div>
                            <span className="font-medium">{size.size}</span>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleEdit('tileSize', size.id)}
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                              onClick={() => confirmDelete('tileSize', size.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
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
                  <CardTitle>{editMode ? 'Edit' : 'Add'} Tile</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddTile} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="tileName">Tile Name</Label>
                      <Input
                        id="tileName"
                        value={newTile.name}
                        onChange={(e) =>
                          setNewTile({ ...newTile, name: e.target.value })
                        }
                        placeholder="Enter tile name"
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tileType">Tile Type</Label>
                      <select
                        className="w-full p-2 border rounded-md"
                        value={newTile.type}
                        onChange={(e) =>
                          setNewTile({ ...newTile, type: e.target.value })
                        }
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
                        className="w-full p-2 border rounded-md"
                        value={newTile.size}
                        onChange={(e) =>
                          setNewTile({ ...newTile, size: e.target.value })
                        }
                      >
                        <option value="">Select Tile Size</option>
                        {tileSizes.map((size) => (
                          <option key={size.id} value={size.id}>
                            {size.size}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Input
                        id="description"
                        value={newTile.description}
                        onChange={(e) =>
                          setNewTile({ ...newTile, description: e.target.value })
                        }
                        placeholder="Enter tile description"
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tileImage">Tile Image (.jpg, .jpeg)</Label>
                      <div className="flex items-center gap-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => document.getElementById('tileImage')?.click()}
                          className="flex-shrink-0"
                        >
                          Choose File
                        </Button>
                        <span className="text-sm text-gray-500">
                          {newTile.image ? newTile.image.name : 'No file chosen'}
                        </span>
                        <Input
                          id="tileImage"
                          type="file"
                          accept=".jpg,.jpeg"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (
                              file &&
                              (file.type === "image/jpeg" ||
                                file.name.endsWith(".jpg") ||
                                file.name.endsWith(".jpeg"))
                            ) {
                              setNewTile({ ...newTile, image: file });
                            } else {
                              alert("Only .jpg and .jpeg files are allowed");
                            }
                          }}
                          className="hidden"
                        />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button type="submit" className="flex-1">
                        {editMode ? 'Update' : 'Add'} Tile
                      </Button>
                      {editMode && (
                        <Button type="button" variant="outline" onClick={resetForm}>
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </form>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Existing Tiles</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {tiles.map((tile) => (
                        <Card key={tile.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                          <div className="relative aspect-square bg-gray-100">
                            {tile.image ? (
                              <img
                                src={URL.createObjectURL(tile.image)}
                                alt={tile.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                  <circle cx="8.5" cy="8.5" r="1.5" />
                                  <path d="M21 15l-5-5L5 21" />
                                </svg>
                              </div>
                            )}
                          </div>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start gap-4">
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-lg truncate" title={tile.name}>
                                  {tile.name}
                                </h4>
                                <div className="mt-2 space-y-1 text-sm text-gray-500">
                                  <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                      <line x1="12" y1="22.08" x2="12" y2="12" />
                                    </svg>
                                    <span>{tileTypes.find((t) => t.id === tile.type)?.name}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                      <line x1="3" y1="9" x2="21" y2="9" />
                                      <line x1="9" y1="21" x2="9" y2="9" />
                                    </svg>
                                    <span>{tileSizes.find((s) => s.id === tile.size)?.size}</span>
                                  </div>
                                </div>
                                {tile.description && (
                                  <p className="mt-3 text-sm text-gray-600 line-clamp-2" title={tile.description}>
                                    {tile.description}
                                  </p>
                                )}
                              </div>
                              <div className="flex flex-col gap-2">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => handleEdit('tile', tile.id)}
                                >
                                  <Pencil className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                                  onClick={() => confirmDelete('tile', tile.id)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the {
                itemToDelete?.type === 'tileType' ? 'tile type' :
                itemToDelete?.type === 'tileSize' ? 'tile size' : 'tile'
              }.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-500 text-white hover:bg-red-600"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
