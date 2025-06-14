"use client";

import { useState, useEffect } from "react";
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
import { useSearchParams } from "next/navigation";
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
import axios from "axios";

interface TileType {
  tile_type_id: number;
  tile_type_name: string;
}

interface TileSize {
  tile_size_id: number;
  tile_size: string;
  tile_size_name: string;
}

interface Tile {
  tile_id: number;
  tile_name: string;
  tile_type_id: number;
  tile_size_id: number;
  description: string;
  image_url?: string;
}

interface SanitaryType {
  sanitary_type_id: number;
  sanitary_type_name: string;
}

interface Sanitary {
  sanitary_id: number;
  sanitary_name: string;
  sanitary_type_id: number;
  description: string;
  image_url?: string;
}

interface Brochure {
  brochure_id: number;
  brochure_name: string;
  brochure_pdf: string; // or JSONB if multiple files
  tile_size_id: number;
}

export default function TilesPage() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const productId = searchParams.get("productId");
  const [tileTypes, setTileTypes] = useState<TileType[]>([]);
  const [tileSizes, setTileSizes] = useState<TileSize[]>([]);
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [sanitaryTypes, setSanitaryTypes] = useState<SanitaryType[]>([]);
  const [sanitaryItems, setSanitaryItems] = useState<Sanitary[]>([]);
  const [brochures, setBrochures] = useState<Brochure[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const [newSanitaryType, setNewSanitaryType] = useState("");
  const [newSanitary, setNewSanitary] = useState<{
    name: string;
    type: string;
    description: string;
    image?: File;
  }>({
    name: "",
    type: "",
    description: "",
    image: undefined,
  });

  const [newBrochure, setNewBrochure] = useState<{
    name: string;
    file?: File;
    tileSize: string;
  }>({
    name: "",
    file: undefined,
    tileSize: "",
  });

  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{ type: string; id: string } | null>(null);

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
    setNewSanitaryType("");
    setNewSanitary({
      name: "",
      type: "",
      description: "",
      image: undefined,
    });
    setNewBrochure({ name: "", file: undefined, tileSize: "" });
    setEditMode(false);
    setEditId(null);
  };

  useEffect(() => {
    fetchData();
    fetchBrochures();
    
    // Handle productId from URL if present
    if (productId) {
      // This is just a placeholder - you would need to implement actual product fetching
      // based on your API structure
      toast({
        title: "Edit Product",
        description: `Loading product with ID: ${productId}`,
      });
      
      // Example: Set edit mode and populate form with product data
      setEditMode(true);
      setEditId(productId);
      
      // Fetch product data and populate the form
      // This is a placeholder - replace with actual API call
      fetchProductById(productId);
    }
  }, [productId]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [
        tileTypesResponse,
        tileSizesResponse,
        tilesResponse,
        sanitaryTypesResponse,
        sanitaryItemsResponse,
      ] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/tile/get-all-tile-types`),
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/tile/get-all-tile-sizes`),
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/tile/get-all-tiles`),
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/sanitary/get-sanitary-type`),
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/sanitary/get-sanitary`),
      ]);

      if (!tileTypesResponse.ok || !tileSizesResponse.ok || !tilesResponse.ok || 
          !sanitaryTypesResponse.ok || !sanitaryItemsResponse.ok) {
        throw new Error('Failed to fetch data');
      }

      const tileTypesData = await tileTypesResponse.json();
      const tileSizesData = await tileSizesResponse.json();
      const tilesData = await tilesResponse.json();
      const sanitaryTypesData = await sanitaryTypesResponse.json();
      const sanitaryItemsData = await sanitaryItemsResponse.json();

      setTileTypes(tileTypesData.tileTypes || []);
      setTileSizes(tileSizesData.tileSizes || []);
      setTiles(tilesData.tiles || []);
      setSanitaryTypes(sanitaryTypesData.sanitaryTypes || []);
      setSanitaryItems(sanitaryItemsData.sanitaryItems || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast({
        title: "Error",
        description: "Failed to fetch data. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchProductById = async (id: string) => {
    try {
      // This is a placeholder - replace with actual API endpoint
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/products/${id}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      
      const data = await response.json();
      
      // Populate the form with product data
      // This is just an example - adjust based on your actual data structure
      if (data.product) {
        // If it's a tile product
        setNewTile({
          name: data.product.name || "",
          type: data.product.type_id?.toString() || "",
          size: data.product.size_id?.toString() || "",
          description: data.product.description || "",
        });
        
        // Set the active tab based on product type
        // This assumes you have a way to determine the product type
        // You might need to adjust this logic based on your data structure
      }
    } catch (error) {
      console.error('Error fetching product:', error);
      toast({
        title: "Error",
        description: "Failed to fetch product data. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const fetchBrochures = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/brochure/get-all-brochures`);
      const data = await res.json();
      if (data.brochures) setBrochures(data.brochures);
    } catch (error) {
      console.error("Error fetching brochures:", error);
    }
  };

  const handleEdit = (type: string, id: string) => {
    setEditMode(true);
    setEditId(id);

    switch (type) {
      case "sanitaryType":
        const sanitaryType = sanitaryTypes.find((t) => t.sanitary_type_id.toString() === id);
        if (sanitaryType) {
          setNewSanitaryType(sanitaryType.sanitary_type_name);
        }
        break;
      case "sanitary":
        const sanitary = sanitaryItems.find((t) => t.sanitary_id.toString() === id);
        if (sanitary) {
          setNewSanitary({
            name: sanitary.sanitary_name,
            type: sanitary.sanitary_type_id.toString(),
            description: sanitary.description,
          });
        }
        break;
      case "tileType":
        const tileType = tileTypes.find((t) => t.tile_type_id.toString() === id);
        if (tileType) {
          setNewTileType(tileType.tile_type_name);
        }
        break;
      case "tileSize":
        const tileSize = tileSizes.find((s) => s.tile_size_id.toString() === id);
        if (tileSize) {
          setNewTileSize(tileSize.tile_size_name);
        }
        break;
      case "tile":
        const tile = tiles.find((t) => t.tile_id.toString() === id);
        if (tile) {
          setNewTile({
            name: tile.tile_name,
            type: tile.tile_type_id.toString(),
            size: tile.tile_size_id.toString(),
            description: tile.description,
          });
        }
        break;
    }
  };

  const handleAddTileType = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTileType.trim()) return;
  
    try {
        const method = editMode && editId ? "PUT" : "POST";
        const endpoint = editMode && editId
            ? `${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/tile/edit-tile-type/${editId}`
            : `${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/tile/add-tile-type`;

        const response = await fetch(endpoint, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editMode && editId 
                ? { tile_type_name: newTileType }
                : { tile_type_name: newTileType }
            ),
        });

        if (!response.ok) throw new Error("Failed to add/update tile type");
  
        const data = await response.json();
  
        if (editMode && editId) {
            setTileTypes(
                tileTypes.map((type) =>
                    type.tile_type_id.toString() === editId 
                        ? { ...type, tile_type_name: newTileType } 
                        : type
                )
            );
            toast({
                title: "Success",
                description: "Tile type updated successfully",
            });
        } else {
            const newType: TileType = {
                tile_type_id: data.tileType.tile_type_id,
                tile_type_name: newTileType,
            };
            setTileTypes([...tileTypes, newType]);
            toast({
                title: "Success",
                description: "Tile type added successfully",
            });
        }
        resetForm();
    } catch (error) {
        console.error("Error:", error);
        toast({
            title: "Error",
            description: "Failed to add/update tile type. Please try again later.",
            variant: "destructive",
        });
    }
};
  
const handleAddTileSize = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTileSize.trim()) return;
  
    try {
        const method = editMode && editId ? "PUT" : "POST";
        const endpoint = editMode && editId
            ? `${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/tile/edit-tile-size/${editId}`
            : `${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/tile/add-tile-size`;

        const response = await fetch(endpoint, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editMode && editId
                ? { tile_size: newTileSize }
                : { tile_size: newTileSize, tile_size_name: newTileSize }
            ),
        });
  
        if (!response.ok) throw new Error("Failed to add/update tile size");
  
        const data = await response.json();
  
        if (editMode && editId) {
            setTileSizes(
                tileSizes.map((size) =>
                    size.tile_size_id.toString() === editId 
                        ? { ...size, tile_size: newTileSize, tile_size_name: newTileSize } 
                        : size
                )
            );
            toast({
                title: "Success",
                description: "Tile size updated successfully",
            });
        } else {
            const newSize: TileSize = {
                tile_size_id: data.tileSize.tile_size_id,
                tile_size: newTileSize,
                tile_size_name: newTileSize,
            };
            setTileSizes([...tileSizes, newSize]);
            toast({
                title: "Success",
                description: "Tile size added successfully",
            });
        }
        resetForm();
    } catch (error) {
        console.error("Error:", error);
        toast({
            title: "Error",
            description: "Failed to add/update tile size. Please try again later.",
            variant: "destructive",
        });
    }
};
  
const handleAddTile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTile.name || !newTile.type || !newTile.size) return;
  
    try {
        const formData = new FormData();
        formData.append('tile_name', newTile.name);
        formData.append('tile_type_id', newTile.type);
        formData.append('tile_size_id', newTile.size);
        formData.append('description', newTile.description);
        if (newTile.image) {
            formData.append('image', newTile.image);
        }

        const method = editMode && editId ? "PUT" : "POST";
        const endpoint = editMode && editId
            ? `${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/tile/edit-tile/${editId}`
            : `${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/tile/add-tile`;

        const response = await fetch(endpoint, {
            method,
            body: formData,
        });
  
        if (!response.ok) throw new Error("Failed to add/update tile");
  
        const data = await response.json();
  
        if (editMode && editId) {
            setTiles(
                tiles.map((tile) =>
                    tile.tile_id.toString() === editId ? {
                        ...tile,
                        tile_name: newTile.name,
                        tile_type_id: parseInt(newTile.type),
                        tile_size_id: parseInt(newTile.size),
                        description: newTile.description,
                        image_url: data.tile.image_url || tile.image_url
                    } : tile
                )
            );
            toast({
                title: "Success",
                description: "Tile updated successfully",
            });
        } else {
            const newTileItem: Tile = {
                tile_id: data.tile.tile_id,
                tile_name: newTile.name,
                tile_type_id: parseInt(newTile.type),
                tile_size_id: parseInt(newTile.size),
                description: newTile.description,
                image_url: data.tile.image_url
            };
            setTiles([...tiles, newTileItem]);
            toast({
                title: "Success",
                description: "Tile added successfully",
            });
        }
        resetForm();
    } catch (error) {
        console.error("Error:", error);
        toast({
            title: "Error",
            description: "Failed to add/update tile. Please try again later.",
            variant: "destructive",
        });
    }
};
  
const handleAddSanitaryType = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSanitaryType.trim()) return;
  
    try {
        const method = editMode && editId ? "PUT" : "POST";
        const endpoint = editMode && editId
            ? `${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/sanitary/edit-sanitary-type/${editId}`
            : `${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/sanitary/add-sanitary-type`;

        const response = await fetch(endpoint, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editMode && editId
                ? { sanitary_type_name: newSanitaryType }
                : { sanitary_type_name: newSanitaryType }
            ),
        });
  
        if (!response.ok) throw new Error("Failed to add/update sanitary type");
  
        const data = await response.json();
  
        if (editMode && editId) {
            setSanitaryTypes(
                sanitaryTypes.map((type) =>
                    type.sanitary_type_id.toString() === editId 
                        ? { ...type, sanitary_type_name: newSanitaryType } 
                        : type
                )
            );
            toast({
                title: "Success",
                description: "Sanitary type updated successfully",
            });
        } else {
            const newType: SanitaryType = {
                sanitary_type_id: data.sanitaryType.sanitary_type_id,
                sanitary_type_name: newSanitaryType,
            };
            setSanitaryTypes([...sanitaryTypes, newType]);
            toast({
                title: "Success",
                description: "Sanitary type added successfully",
            });
        }
        resetForm();
    } catch (error) {
        console.error("Error:", error);
        toast({
            title: "Error",
            description: "Failed to add/update sanitary type. Please try again later.",
            variant: "destructive",
        });
    }
};
  
const handleAddSanitary = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSanitary.name || !newSanitary.type) return;
  
    try {
        const formData = new FormData();
        formData.append('sanitary_name', newSanitary.name);
        formData.append('sanitary_type_id', newSanitary.type);
        formData.append('description', newSanitary.description);
        if (newSanitary.image) {
            formData.append('image', newSanitary.image);
        }

        const method = editMode && editId ? "PUT" : "POST";
        const endpoint = editMode && editId
            ? `${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/sanitary/edit-sanitary/${editId}`
            : `${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/sanitary/add-sanitary`;

        const response = await fetch(endpoint, {
            method,
            body: formData,
        });
  
        if (!response.ok) throw new Error("Failed to add/update sanitary");
  
        const data = await response.json();
  
        if (editMode && editId) {
            setSanitaryItems(
                sanitaryItems.map((item) =>
                    item.sanitary_id.toString() === editId ? {
                        ...item,
                        sanitary_name: newSanitary.name,
                        sanitary_type_id: parseInt(newSanitary.type),
                        description: newSanitary.description,
                        image_url: data.sanitaryWare.image_url || item.image_url
                    } : item
                )
            );
            toast({
                title: "Success",
                description: "Sanitary updated successfully",
            });
        } else {
            const newItem: Sanitary = {
                sanitary_id: data.sanitaryWare.sanitary_id,
                sanitary_name: newSanitary.name,
                sanitary_type_id: parseInt(newSanitary.type),
                description: newSanitary.description,
                image_url: data.sanitaryWare.image_url
            };
            setSanitaryItems([...sanitaryItems, newItem]);
            toast({
                title: "Success",
                description: "Sanitary added successfully",
            });
        }
        resetForm();
    } catch (error) {
        console.error("Error:", error);
        toast({
            title: "Error",
            description: "Failed to add/update sanitary. Please try again later.",
            variant: "destructive",
        });
    }
};
  
const handleAddBrochure = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!newBrochure.name || !newBrochure.file || !newBrochure.tileSize) return;
  try {
    const formData = new FormData();
    formData.append('brochure_name', newBrochure.name);
    formData.append('tile_size_id', newBrochure.tileSize);
    formData.append('brochure_pdf', newBrochure.file);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/brochure/add-brochure`,
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    toast({ title: "Success", description: "Brochure added successfully" });
    setNewBrochure({ name: "", file: undefined, tileSize: "" });
    fetchBrochures();
    console.log('Brochure uploaded:', response.data);
  } catch (error) {
    console.error("Error adding brochure:", error);
    toast({ title: "Error", description: "Failed to add brochure. Please try again later.", variant: "destructive" });
  }
};

  const handleDelete = async () => {
    if (!itemToDelete) return;

    try {
        let response;
        switch (itemToDelete.type) {
            case "sanitaryType":
                response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/sanitary/delete-sanitary-type/${itemToDelete.id}`, {
                    method: 'DELETE'
                });
                if (response.ok) {
                    setSanitaryTypes(sanitaryTypes.filter((type) => type.sanitary_type_id.toString() !== itemToDelete.id));
                }
                break;
            case "sanitary":
                response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/sanitary/delete-sanitary/${itemToDelete.id}`, {
                    method: 'DELETE'
                });
                if (response.ok) {
                    setSanitaryItems(sanitaryItems.filter((item) => item.sanitary_id.toString() !== itemToDelete.id));
                }
                break;
            case "tileType":
                response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/tile/delete-tile-type/${itemToDelete.id}`, {
                    method: 'DELETE'
                });
                if (response.ok) {
                    setTileTypes(tileTypes.filter((type) => type.tile_type_id.toString() !== itemToDelete.id));
                }
                break;
            case "tileSize":
                response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/tile/delete-tile-size/${itemToDelete.id}`, {
                    method: 'DELETE'
                });
                if (response.ok) {
                    setTileSizes(tileSizes.filter((size) => size.tile_size_id.toString() !== itemToDelete.id));
                }
                break;
            case "tile":
                response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/tile/delete-tile/${itemToDelete.id}`, {
                    method: 'DELETE'
                });
                if (response.ok) {
                    setTiles(tiles.filter((tile) => tile.tile_id.toString() !== itemToDelete.id));
                }
                break;
        }

        if (response && response.ok) {
            toast({
                title: "Success",
                description: `${
                    itemToDelete.type === "sanitaryType"
                        ? "Sanitary type"
                        : itemToDelete.type === "sanitary"
                        ? "Sanitary item"
                        : itemToDelete.type === "tileType"
                        ? "Tile type"
                        : itemToDelete.type === "tileSize"
                        ? "Tile size"
                        : "Tile"
                } deleted successfully`,
            });
        } else {
            throw new Error('Delete operation failed');
        }
    } catch (error) {
        console.error('Error deleting item:', error);
        toast({
            title: "Error",
            description: "Failed to delete item. Please try again later.",
            variant: "destructive",
        });
    }

    setDeleteConfirmOpen(false);
    setItemToDelete(null);
  };

  const confirmDelete = (type: string, id: string) => {
    setItemToDelete({ type, id });
    setDeleteConfirmOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Header />
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="types" className="space-y-8">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="types">Tile Types</TabsTrigger>
              <TabsTrigger value="sizes">Tile Sizes</TabsTrigger>
              <TabsTrigger value="tiles">Tiles</TabsTrigger>
              <TabsTrigger value="sanitaryTypes">Sanitary Types</TabsTrigger>
              <TabsTrigger value="sanitary">Sanitary</TabsTrigger>
              <TabsTrigger value="brochures">Brochures</TabsTrigger>
            </TabsList>

            <TabsContent value="types">
              <Card>
                <CardHeader>
                  <CardTitle>{editMode ? "Edit" : "Add"} Tile Type</CardTitle>
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
                        {editMode ? "Update" : "Add"} Tile Type
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
                    {isLoading ? (
                      <div className="flex justify-center items-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                      </div>
                    ) : (
                      <div className="grid gap-3">
                        {tileTypes.length > 0 ? (
                          tileTypes.map((type) => (
                            <div key={type.tile_type_id} className="p-4 bg-gray-50 rounded-lg flex justify-between items-center hover:bg-gray-100 transition-colors">
                              <span className="font-medium">{type.tile_type_name}</span>
                              <div className="flex gap-2">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => handleEdit("tileType", type.tile_type_id.toString())}
                                >
                                  <Pencil className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                  onClick={() => confirmDelete("tileType", type.tile_type_id.toString())}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-center text-gray-500">No tile types available</p>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sizes">
              <Card>
                <CardHeader>
                  <CardTitle>{editMode ? "Edit" : "Add"} Tile Size</CardTitle>
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
                        {editMode ? "Update" : "Add"} Tile Size
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
                      {tileSizes.length > 0 ? (
                        tileSizes.map((size: TileSize) => (
                          <div key={size.tile_size_id} className="p-4 bg-gray-50 rounded-lg flex justify-between items-center hover:bg-gray-100 transition-colors">
                            <div>
                              <span className="font-medium">{size.tile_size_name}</span>
                              <span className="text-sm text-gray-500 ml-2">{size.tile_size}</span>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleEdit("tileSize", size.tile_size_id.toString())}
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                onClick={() => confirmDelete("tileSize", size.tile_size_id.toString())}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p>No tile sizes available</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tiles">
              <Card>
                <CardHeader>
                  <CardTitle>{editMode ? "Edit" : "Add"} Tile</CardTitle>
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
                          <option key={type.tile_type_id} value={type.tile_type_id.toString()}>
                            {type.tile_type_name}
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
                          <option key={size.tile_size_id} value={size.tile_size_id.toString()}>
                            {size.tile_size_name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tileImage">Tile Image (.jpg, .jpeg)</Label>
                      <div className="flex items-center gap-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => document.getElementById("tileImage")?.click()}
                          className="flex-shrink-0"
                        >
                          Choose File
                        </Button>
                        <span className="text-sm text-gray-500">
                          {newTile.image ? newTile.image.name : "No file chosen"}
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
                        {editMode ? "Update" : "Add"} Tile
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
                      {tiles.length > 0 ? (
                        tiles.map((tile) => (
                          <Card key={tile.tile_id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                            <div className="relative aspect-square bg-gray-100">
                              {tile.image_url ? (
                                <img
                                  src={tile.image_url}
                                  alt={tile.tile_name}
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
                                  <h4 className="font-semibold text-lg truncate" title={tile.tile_name}>
                                    {tile.tile_name}
                                  </h4>
                                  <div className="mt-2 space-y-1 text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                        <line x1="12" y1="22.08" x2="12" y2="12" />
                                      </svg>
                                      <span>{tileTypes.find((t) => t.tile_type_id === tile.tile_type_id)?.tile_type_name}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                        <line x1="3" y1="9" x2="21" y2="9" />
                                        <line x1="9" y1="21" x2="9" y2="9" />
                                      </svg>
                                      <span>{tileSizes.find((s) => s.tile_size_id === tile.tile_size_id)?.tile_size_name}</span>
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
                                    onClick={() => handleEdit("tile", tile.tile_id.toString())}
                                  >
                                    <Pencil className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                                    onClick={() => confirmDelete("tile", tile.tile_id.toString())}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))
                      ) : (
                        <p>No tiles available</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sanitaryTypes">
              <Card>
                <CardHeader>
                  <CardTitle>{editMode ? "Edit" : "Add"} Sanitary Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddSanitaryType} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="sanitaryType">Sanitary Type Name</Label>
                      <Input
                        id="sanitaryType"
                        value={newSanitaryType}
                        onChange={(e) => setNewSanitaryType(e.target.value)}
                        placeholder="Enter sanitary type name"
                        className="w-full"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button type="submit" className="flex-1">
                        {editMode ? "Update" : "Add"} Sanitary Type
                      </Button>
                      {editMode && (
                        <Button type="button" variant="outline" onClick={resetForm}>
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </form>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Existing Sanitary Types</h3>
                    <div className="grid gap-3">
                      {sanitaryTypes.length > 0 ? (
                        sanitaryTypes.map((type) => (
                          <div key={type.sanitary_type_id} className="p-4 bg-gray-50 rounded-lg flex justify-between items-center hover:bg-gray-100 transition-colors">
                            <span className="font-medium">{type.sanitary_type_name}</span>
                            <div className="flex gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleEdit("sanitaryType", type.sanitary_type_id.toString())}
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                onClick={() => confirmDelete("sanitaryType", type.sanitary_type_id.toString())}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p>No sanitary types available</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sanitary">
              <Card>
                <CardHeader>
                  <CardTitle>{editMode ? "Edit" : "Add"} Sanitary</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddSanitary} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="sanitaryName">Sanitary Name</Label>
                      <Input
                        id="sanitaryName"
                        value={newSanitary.name}
                        onChange={(e) => setNewSanitary({ ...newSanitary, name: e.target.value })}
                        placeholder="Enter sanitary name"
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="sanitaryType">Sanitary Type</Label>
                      <select
                        className="w-full p-2 border rounded-md"
                        value={newSanitary.type}
                        onChange={(e) =>
                          setNewSanitary({ ...newSanitary, type: e.target.value })
                        }
                      >
                        <option value="">Select Sanitary Type</option>
                        {sanitaryTypes.map((type) => (
                          <option key={type.sanitary_type_id} value={type.sanitary_type_id.toString()}>
                            {type.sanitary_type_name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Input
                        id="description"
                        value={newSanitary.description}
                        onChange={(e) =>
                          setNewSanitary({ ...newSanitary, description: e.target.value })
                        }
                        placeholder="Enter sanitary description"
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="sanitaryImage">Sanitary Image (.jpg, .jpeg)</Label>
                      <div className="flex items-center gap-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => document.getElementById("sanitaryImage")?.click()}
                          className="flex-shrink-0"
                        >
                          Choose File
                        </Button>
                        <span className="text-sm text-gray-500">
                          {newSanitary.image ? newSanitary.image.name : "No file chosen"}
                        </span>
                        <Input
                          id="sanitaryImage"
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
                              setNewSanitary({ ...newSanitary, image: file });
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
                        {editMode ? "Update" : "Add"} Sanitary
                      </Button>
                      {editMode && (
                        <Button type="button" variant="outline" onClick={resetForm}>
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </form>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Existing Sanitary Items</h3>
                    <div className="grid gap-3">
                      {sanitaryItems.length > 0 ? (
                        sanitaryItems.map((item) => (
                          <div key={item.sanitary_id} className="p-4 bg-gray-50 rounded-lg flex justify-between items-center hover:bg-gray-100 transition-colors">
                            <span className="font-medium">{item.sanitary_name}</span>
                            <div className="flex gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleEdit("sanitary", item.sanitary_id.toString())}
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                onClick={() => confirmDelete("sanitary", item.sanitary_id.toString())}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p>No sanitary items available</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="brochures">
              <Card>
                <CardHeader>
                  <CardTitle>Add Brochure</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddBrochure} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="brochureName">Brochure Name</Label>
                      <Input
                        id="brochureName"
                        value={newBrochure.name}
                        onChange={(e) => setNewBrochure({ ...newBrochure, name: e.target.value })}
                        placeholder="Enter brochure name"
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="brochureFile">Upload Brochure (PDF)</Label>
                      <Input
                        id="brochureFile"
                        type="file"
                        accept=".pdf"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file && file.type === "application/pdf") {
                            setNewBrochure({ ...newBrochure, file });
                          } else {
                            alert("Only PDF files are allowed");
                          }
                        }}
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="brochureTileSize">Tile Size</Label>
                      <select
                        id="brochureTileSize"
                        className="w-full p-2 border rounded-md"
                        value={newBrochure.tileSize}
                        onChange={(e) => setNewBrochure({ ...newBrochure, tileSize: e.target.value })}
                      >
                        <option value="">Select Tile Size</option>
                        {tileSizes.map((size) => (
                          <option key={size.tile_size_id} value={size.tile_size_id}>
                            {size.tile_size_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <Button type="submit" className="w-full">Add Brochure</Button>
                  </form>
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Existing Brochures</h3>
                    <div className="grid gap-3">
                      {brochures.length > 0 ? (
                        brochures.map((brochure) => (
                          <div key={brochure.brochure_id} className="p-4 bg-gray-50 rounded-lg flex justify-between items-center hover:bg-gray-100 transition-colors">
                            <span className="font-medium">{brochure.brochure_name}</span>
                            <span className="text-sm text-gray-500 ml-2">{tileSizes.find((s) => s.tile_size_id === brochure.tile_size_id)?.tile_size_name}</span>
                            <a href={brochure.brochure_pdf} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-4">View PDF</a>
                          </div>
                        ))
                      ) : (
                        <p className="text-center text-gray-500">No brochures available</p>
                      )}
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
              This action cannot be undone. This will permanently delete the{" "}
              {itemToDelete?.type}.
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
